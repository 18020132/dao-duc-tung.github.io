const categories = require('./src/data/categories');

module.exports = {
  site: {
    title: 'AI Engineering',
    description: 'AI Engineering Blog',
    basePath: process.env.NODE_ENV === 'production' ? '/aiengineer' : '',
    categories,
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './public' : './output',
  },
};
