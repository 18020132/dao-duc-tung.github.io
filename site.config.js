const gtag = { enable: true, gtagkey: 'UA-116933686-1' };
const categories = require('./src/data/categories');

module.exports = {
  site: {
    title: 'AI Engineer',
    description: 'AI Engineer Skills',
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    gtag,
    categories,
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './output',
  },
};
