const fse = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const marked = require('marked');
const frontMatter = require('front-matter');
const glob = require('glob');
const moment = require('moment');
const spawn = require('await-spawn');
const fs = require('fs').promises;

const dataHelper = require('../src/data/index');
const config = require('../site.config');

const srcPath = './src';
const distPath = config.build.outputPath;
const distCnamePath = `${distPath}/CNAME`;
const tempCnamePath = `./CNAME`;

const pythonPath = 'C:/ProgramData/Anaconda3/python.exe';
const tocPy = `./scripts/toc.py`;
const maxTocLevel = 2;

// copy CNAME file out of distPath
if (process.env.NODE_ENV === 'production') {
  if (fse.existsSync(distCnamePath)) {
    fse.copyFileSync(distCnamePath, tempCnamePath);
    console.log('Move CNAME out successfully');
  }
}

// clear destination folder
fse.emptyDirSync(distPath);

// copy files
fse.copy(`${srcPath}/assets`, `${distPath}/assets`);

// read pages
const files = glob.sync('**/*.@(md|ejs|html)', { cwd: `${srcPath}/pages` });

(async () => {
  await Promise.all(
    files.map(async (file, i) => {
      const fileData = path.parse(file);
      const destPath = path.join(distPath, fileData.dir);

      // create destination directory
      fse.mkdirsSync(destPath);

      // read page file
      const pageFilePath = `${srcPath}/pages/${file}`;
      const tempPageFilePath = `${srcPath}/pages/${path.dirname(file)}/${fileData.name}.toc`;
      let data = '';
      try {
        await spawn(pythonPath, [tocPy, pageFilePath, tempPageFilePath, maxTocLevel]);
        data = fse.readFileSync(tempPageFilePath, 'utf-8');
        if (fse.existsSync(tempPageFilePath)) {
          fse.removeSync(tempPageFilePath);
        }
      } catch (e) {
        data = fse.readFileSync(pageFilePath, 'utf-8');
      }

      // add data for current page
      const createdDate = dataHelper.getCreatedDate(pageFilePath);
      const modifiedDate = dataHelper.getModifiedDate(pageFilePath);
      const readingTime = dataHelper.measureReadingTime(data);
      const url = `${destPath}/${fileData.name}`;

      // render page
      const pageData = frontMatter(data);
      const templateConfig = Object.assign({}, config, {
        page: Object.assign({}, pageData.attributes, {
          createdDate,
          modifiedDate,
          readingTime,
        }),
        helper: {
          dataHelper,
          moment,
        },
      });
      let pageContent;

      // generate page content according to file type
      switch (fileData.ext) {
        case '.md':
          pageContent = marked(pageData.body);
          break;
        case '.ejs':
          pageContent = ejs.render(pageData.body, templateConfig, {
            filename: pageFilePath,
          });
          break;
        default:
          pageContent = pageData.body;
      }

      // render layout with page contents
      const layout = pageData.attributes.layout || 'index';
      const layoutFileName = `${srcPath}/layouts/${layout}.ejs`;
      const layoutData = fse.readFileSync(layoutFileName, 'utf-8');
      const htmlPath = `${url}.html`;

      const completePage = ejs.render(
        layoutData,
        Object.assign({}, templateConfig, {
          body: pageContent,
          filename: layoutFileName,
        })
      );

      // save the html file
      fse.writeFileSync(htmlPath, completePage);
    })
  );

  // copy CNAME file into distPath
  if (process.env.NODE_ENV === 'production') {
    if (fse.existsSync(tempCnamePath)) {
      fse.copyFileSync(tempCnamePath, distCnamePath);
      fse.removeSync(tempCnamePath);
      console.log('Copy CNAME back successfully');
    }
  }
})();
