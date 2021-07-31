const fse = require('fs-extra');
const moment = require('moment');
const posts = require('./posts');
const srcPath = './src';

const CATEGORY_TYPE = 'category';
const TOPIC_TYPE = 'topic';
const POST_TYPE = 'post';
const N_LATEST_POSTS = 50;

const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
}

const getAllCategories = () => {
  return posts.filter((category) => {
    if (category.type === CATEGORY_TYPE) return true;
    return false;
  });
};
const allCategories = getAllCategories();

const getAllTopics = () => {
  var allTopics = [];
  allCategories.forEach((category) => {
    category.childs.forEach((topic) => {
      if (topic.type === TOPIC_TYPE) {
        allTopics.push(topic);
      }
    });
  });
  return allTopics;
};
const allTopics = getAllTopics();

const getAllPosts = () => {
  var allPosts = [];
  allTopics.forEach((topic) => {
    topic.childs.forEach((post) => {
      if (post.type === POST_TYPE) {
        allPosts.push(post);
      }
    });
  });
  return allPosts;
};
const allPosts = getAllPosts();

const getCategory = (categoryUrl) => {
  return allCategories.find((category) => {
    if (category.url === categoryUrl) return true;
    return false;
  });
};

const getTopic = (topicUrl) => {
  return allTopics.find((topic) => {
    if (topic.url === topicUrl) return true;
    return false;
  });
};

const getPost = (postUrl) => {
  return allPosts.find((post) => {
    if (post.url === postUrl) return true;
    return false;
  });
};

const getPrevPost = (currentPostUrl) => {
  if (allPosts.length > 0 && allPosts[0].url === currentPostUrl) {
    return undefined;
  }
  for (var i = 1; i < allPosts.length; ++i) {
    if (allPosts[i].url === currentPostUrl) {
      return allPosts[i - 1];
    }
  }
  return undefined;
};

const getNextPost = (currentPostUrl) => {
  if (allPosts.length > 0 && allPosts[allPosts.length - 1].url === currentPostUrl) {
    return undefined;
  }
  for (var i = 0; i < allPosts.length - 1; ++i) {
    if (allPosts[i].url === currentPostUrl) {
      return allPosts[i + 1];
    }
  }
  return undefined;
};

const getAbsolutePathFromRelativePath = (relativePath) => {
  const filePathMd = `${srcPath}/pages/${relativePath}/index.md`;
  const filePathEjs = `${srcPath}/pages/${relativePath}/index.ejs`;
  if (fse.existsSync(filePathMd)) {
    return filePathMd;
  } else if (fse.existsSync(filePathEjs)) {
    return filePathEjs;
  }
};

const getModifiedDate = (filePath) => {
  return fse.statSync(filePath).mtime;
};

const sortPostByLatestModifiedDate = (post1, post2) => {
  var modifiedDate1 = moment(getModifiedDate(getAbsolutePathFromRelativePath(post1.url)));
  var modifiedDate2 = moment(getModifiedDate(getAbsolutePathFromRelativePath(post2.url)));
  if (modifiedDate1.isAfter(modifiedDate2)) return -1;
  else if (modifiedDate2.isAfter(modifiedDate1)) return 1;
  else return 0;
};

const getLatestPosts = () => {
  var tempPosts = deepCopy(allPosts);
  tempPosts.sort(sortPostByLatestModifiedDate);
  return tempPosts.slice(0, N_LATEST_POSTS);
};
const latestPosts = getLatestPosts();

const getLatestPostsGroupedByCategory = () => {
  var tempCategories = [];
  allCategories.forEach((category) => {
    var tempAllPosts = [];
    category.childs.forEach((topic) => {
      topic.childs.forEach((post) => {
        if (post.type === POST_TYPE) {
          tempAllPosts.push(post);
        }
      });
    });
    if (tempAllPosts.length > 0) {
      var tempCategory = deepCopy(category);
      tempCategory.childs = tempAllPosts;
      tempCategories.push(tempCategory);
    }
  });

  const nLatest = Math.floor(N_LATEST_POSTS / allCategories.length);
  for (var i = 0; i < tempCategories.length; ++i) {
    var tempPosts = tempCategories[i].childs;
    tempPosts.sort(sortPostByLatestModifiedDate);
    tempCategories[i].childs = tempPosts.slice(0, nLatest);
  }
  return tempCategories;
}

var latestPostsGroupedByCategory = getLatestPostsGroupedByCategory();

module.exports = {
  allCategories,
  allTopics,
  allPosts,
  latestPosts,
  latestPostsGroupedByCategory,
  getCategory,
  getTopic,
  getPost,
  getPrevPost,
  getNextPost,
  getModifiedDate,
};
