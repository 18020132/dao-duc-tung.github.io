const gtag = { enable: true, gtagkey: 'UA-116933686-1' };
const posts = require('./src/data/posts');

module.exports = {
  site: {
    title: 'AI Engineer - Stay foolish!',
    description: 'AI Engineer Skills',
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    gtag,
    posts,
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './output',
  },
};
