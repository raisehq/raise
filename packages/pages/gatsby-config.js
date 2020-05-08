const BUTTERCMSKEY = process.env.REACT_APP_BUTTER;

module.exports = {
  siteMetadata: {
    title: 'Raise.it',
    description: 'Raise',
    author: '@raiseit'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato'
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: ['REACT_APP_HOST_IMAGES', 'REACT_APP_HOST_URL_AUTH', 'REACT_APP_HOST_URL_CORE', 'REACT_APP_HOST_URL_FILE']
      },
    },
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: BUTTERCMSKEY,
        pageTypes: ['page_sections']
      }
    }
  ]
};
