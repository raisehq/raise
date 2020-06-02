const Builds = require('./builds'); // eslint-disable-line
const DOMPurify = require('isomorphic-dompurify'); // eslint-disable-line

const WYSIWYGFields = ['body', 'description', 'businessPlan', 'operations', 'competitiveAnalysis'];
const sanitizeObject = (data) => {
  Object.keys(data).forEach((key) => {
    if (WYSIWYGFields.includes(key)) {
      data[key] = DOMPurify.sanitize(data[key]); // eslint-disable-line
    }
  });
  return data;
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Index page /
  const queryIndex = await graphql(Builds.index.query);
  createPage({
    path: Builds.index.path,
    component: Builds.index.component,
    context: {
      data: queryIndex.data
    }
  });

  const queryHelp = await graphql(Builds.help.query);
  createPage({
    path: Builds.help.path,
    component: Builds.help.component,
    context: {
      data: queryHelp.data
    }
  });

  const queryBlogs = await graphql(Builds.blogs.query);
  // Satinize content to avoid atacks
  const blogData = queryBlogs.data.allButterPost.edges
    .map((edge) => edge.node)
    .reduce((prev, next) => {
      prev.push(sanitizeObject(next));
      return prev;
    }, []);

  // Create gallery blogs /blog
  createPage({
    path: Builds.blogs.path,
    component: Builds.blogs.component,
    context: {
      data: blogData
    }
  });

  // Create all pages of the blog /blog/slug
  blogData.forEach((data) => {
    createPage({
      path: `/blog/${data.slug}`,
      component: Builds.posts.component,
      context: {
        data
      }
    });
  });
};
