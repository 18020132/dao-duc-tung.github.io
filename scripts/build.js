const fse = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const marked = require('marked');
const frontMatter = require('front-matter');
const glob = require('glob');
const moment = require('moment');
const config = require('../site.config');

const srcPath = './src';
const distPath = config.build.outputPath;
const distCnamePath = `${distPath}/CNAME`;
const tempCnamePath = `./CNAME`;

const READING_SPEED = 100; // wpm
const measureReadingTime = (str) => {
  const nWords = str.trim().split(/\s+/).length;
  return parseInt(nWords / READING_SPEED);
};

// copy CNAME file out of distPath
if (process.env.NODE_ENV === 'production') {
  if (fse.existsSync(distCnamePath)) {
    fse.copyFileSync(distCnamePath, tempCnamePath);
    console.log('Move CNAME out successful');
  }
}

// clear destination folder
fse.emptyDirSync(distPath);

// copy assets folder
fse.copy(`${srcPath}/assets`, `${distPath}/assets`);

// read pages
const files = glob.sync('**/*.@(md|ejs|html)', { cwd: `${srcPath}/pages` });

files.forEach((file, i) => {
  const fileData = path.parse(file);
  const destPath = path.join(distPath, fileData.dir);

  // create destination directory
  fse.mkdirsSync(destPath);

  // read page file
  const pageFilePath = `${srcPath}/pages/${file}`;
  const data = fse.readFileSync(pageFilePath, 'utf-8');

  // add data for current page
  const modifiedDate = fse.statSync(pageFilePath).mtime;
  const readingTime = measureReadingTime(data);
  const url = `${destPath}/${fileData.name}`;

  // render page
  const pageData = frontMatter(data);
  const templateConfig = Object.assign({}, config, {
    page: Object.assign({}, pageData.attributes, { modifiedDate, readingTime }),
    moment,
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
});

// copy CNAME file into distPath
if (process.env.NODE_ENV === 'production') {
  if (fse.existsSync(tempCnamePath)) {
    fse.copyFileSync(tempCnamePath, distCnamePath);
    fse.removeSync(tempCnamePath);
    console.log('Copy CNAME back successful');
  }
}
