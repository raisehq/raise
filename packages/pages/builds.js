const path = require('path'); // eslint-disable-line
const Querys = {
  index: {
    query: `
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
  `,
    path: '/',
    component: path.resolve('src/templates/invest.tsx')
  },
  blogs: {
    query: `
    {
      allButterPost {
        edges {
          node {
            id
            body
            created
            date
            featured_image
            featured_image_alt
            meta_description
            published
            seo_title
            slug
            status
            summary
            tags {
              name
              slug
            }
            title
            url
            categories {
              name
              slug
            }
            author {
              last_name
              first_name
              email
            }
          }
        }
      }
    }
  `,
    path: '/blog',
    component: path.resolve('src/templates/blogs.tsx')
  },
  posts: {
    component: path.resolve('src/templates/post.tsx')
  }
};

module.exports = Querys;
