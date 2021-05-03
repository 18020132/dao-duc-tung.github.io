const posts = require('./posts');
const CATEGORY_TYPE = 'category';
const TOPIC_TYPE = 'topic';
const POST_TYPE = 'post';

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

const getCategory = (categoryTitle) => {
  return allCategories.find((category) => {
    if (category.title === categoryTitle) return true;
    return false;
  });
};

const getTopic = (topicTitle) => {
  return allTopics.find((topic) => {
    if (topic.title === topicTitle) return true;
    return false;
  });
};

const getPost = (postTitle) => {
  return allPosts.find((post) => {
    if (post.title === postTitle) return true;
    return false;
  });
};

const getPrevPost = (currentPostTitle) => {
  if (allPosts.length > 0 && allPosts[0].title === currentPostTitle) {
    return undefined;
  }
  for (var i = 1; i < allPosts.length; ++i) {
    if (allPosts[i].title === currentPostTitle) {
      return allPosts[i - 1];
    }
  }
  return undefined;
};

const getNextPost = (currentPostTitle) => {
  if (allPosts.length > 0 && allPosts[allPosts.length - 1].title === currentPostTitle) {
    return undefined;
  }
  for (var i = 0; i < allPosts.length - 1; ++i) {
    if (allPosts[i].title === currentPostTitle) {
      return allPosts[i + 1];
    }
  }
  return undefined;
};

module.exports = {
  getCategory,
  getTopic,
  getPost,
  getPrevPost,
  getNextPost,
};
