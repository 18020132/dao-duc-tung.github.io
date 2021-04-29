const categories = require('./src/data/categories');

module.exports = {
  site: {
    title: 'AI Engineer',
    description: 'AI Engineer Blog',
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    categories,
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './output',
  },
};
