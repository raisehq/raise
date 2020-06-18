const path = require('path'); // eslint-disable-line
const Querys = {
  about: {
    query: `
    {
      allButterPage(filter: {slug: {eq: "about"}}) {
        edges {
          node {
            page_title
            page_information
            employee_profile {
              full_name
              linkedin_profile
              order
              position
              profile_image
            }
          }
        }
      }
    }
    `,
    path: '/about',
    component: path.resolve('src/templates/about.tsx')
  },
  help: {
    query: `
      {
        butterPage(slug: {eq: "help"}) {
          help_page_title
          help_page_subtitle
          help_section {
            section_title
            section_information
          }
        }
      }
    `,
    path: '/help',
    component: path.resolve('src/templates/help.tsx')
  },
  press: {
    query: `
    {
      allButterPage(filter: {slug: {eq: "press-releases"}}) {
        edges {
          node {
            articles {
              press_release {
                article_link
                publisher
                publisher_logo
              }
            }
          }
        }
      }
    }
    `,
    path: '/',
    component: path.resolve('src/templates/invest.tsx')
  },
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
    component: path.resolve('src/templates/home.tsx')
  },
  investing: {
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
    path: '/investing',
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
  },
  benefits: {
    query: `
    {
      allButterCollection(filter: {key: {eq: "benefits_section"}}) {
    edges {
      node {
        key
        value {
          id
          image
          main_title
          step_one
          step_three
          step_two
          text_link_to_app
          link_to_app
        }
      }
    }
  }
    }
    `,
    path: '/',
    component: path.resolve('src/templates/home.tsx')
  },
  interestRate: {
    query: `
    {
      allButterCollection(filter: {key: {eq: "interest_rate_section"}}) {
    edges {
      node {
        key
        value {
          title
          subtitle
          player_one_number
          player_two_number
          player_three_number
          player_four_number
          source_information
        }
      }
    }
  }
    }
    `,
    path: '/',
    component: path.resolve('src/templates/home.tsx')
  }
};

module.exports = Querys;
