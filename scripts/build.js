const fse = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const marked = require('marked');
const frontMatter = require('front-matter');
const glob = require('glob');
const moment = require('moment');
const spawn = require('await-spawn');

const dataHelper = require('../src/data/index');
const config = require('../site.config');

const SRC_PATH = './src';
const DIST_PATH = config.build.outputPath;
const DIST_CNAME_PATH = `${DIST_PATH}/CNAME`;
const TEMP_CNAME_PATH = `./CNAME`;

const PYTHON_PATH = 'C:/ProgramData/Miniconda3/python.exe';
const TOC_PY = `./scripts/toc.py`;
const MAX_TOC_LEVEL = 2;

// copy CNAME file out of distPath
if (process.env.NODE_ENV === 'production') {
  if (fse.existsSync(DIST_CNAME_PATH)) {
    fse.copyFileSync(DIST_CNAME_PATH, TEMP_CNAME_PATH);
    console.log('Move CNAME out successfully');
  }
}

// clear destination folder
fse.emptyDirSync(DIST_PATH);

// copy files
fse.copy(`${SRC_PATH}/assets`, `${DIST_PATH}/assets`);

// read pages
const files = glob.sync('**/*.@(md|ejs|html)', { cwd: `${SRC_PATH}/pages` });

(async () => {
  await Promise.all(
    files.map(async (file, i) => {
      const fileData = path.parse(file);
      const destPath = path.join(DIST_PATH, fileData.dir);

      // create destination directory
      fse.mkdirsSync(destPath);

      // read page file
      const pageFilePath = `${SRC_PATH}/pages/${file}`;
      const tempPageFilePath = `${SRC_PATH}/pages/${path.dirname(file)}/${fileData.name}.toc`;
      let data = '';
      try {
        await spawn(PYTHON_PATH, [TOC_PY, pageFilePath, tempPageFilePath, MAX_TOC_LEVEL]);
        data = fse.readFileSync(tempPageFilePath, 'utf-8');
        if (fse.existsSync(tempPageFilePath)) {
          fse.removeSync(tempPageFilePath);
        }
      } catch (e) {
        console.log(
          `Error: read page file: ${e}, pageFilePath=${pageFilePath}, tempPageFilePath=${tempPageFilePath}`
        );
        data = fse.readFileSync(pageFilePath, 'utf-8');
      }

      // add data for current page
      const modifiedDate = dataHelper.getModifiedDate(pageFilePath);
      const readingTime = dataHelper.measureReadingTime(data);
      const url = `${destPath}/${fileData.name}`;

      // render page
      const pageData = frontMatter(data);
      const templateConfig = Object.assign({}, config, {
        page: Object.assign({}, pageData.attributes, {
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
      const layoutFileName = `${SRC_PATH}/layouts/${layout}.ejs`;
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
    if (fse.existsSync(TEMP_CNAME_PATH)) {
      fse.copyFileSync(TEMP_CNAME_PATH, DIST_CNAME_PATH);
      fse.removeSync(TEMP_CNAME_PATH);
      console.log('Copy CNAME back successfully');
    }
  }
})();
