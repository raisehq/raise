/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// 
const path = require('path'); // eslint-disable-line

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
  {
    allButterPage(filter: { slug: { eq: "investing" } }) {
      nodes {
        internal {
          content
          description
          ignoreType
          mediaType
        }
        investing_section {
          image_right_position
          important_information
          learn_more_url
          section_description
          section_image
          section_order
          section_title
        }
        sub_investing_section {
          section_number
          sub_sub_icon
          sub_sub_text
          sub_sub_order
        }
        page_type
      }
    }
  }
  `);
  const template = path.resolve('src/templates/invest.tsx');

  createPage({
    path: '/',
    component: template,
    context: {
      data: queryResults.data
    }
  });

};