const BUTTERCMSKEY = process.env.GATSBY_REACT_APP_BUTTER;

// require('dotenv').config({
//   path: `.env.development`
// });

module.exports = {
  siteMetadata: {
    title: 'Invest, Grow and Do Good!',
    description: 'Check out the available investment opportunities in our marketplace',
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
        name: 'Raise.it',
        short_name: 'Raise.it',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Lato'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        whitelist: [
          'GATSBY_REACT_APP_DEFAULT_NETWORK_ID',
          'GATSBY_REACT_APP_HOST_THEGRAPH',
          'GATSBY_REACT_APP_HOST_THEGRAPH_WS',
          'GATSBY_REACT_APP_METADATA_URL',
          'GATSBY_REACT_APP_HOST_IMAGES',
          'GATSBY_REACT_APP_HOST_URL_AUTH',
          'GATSBY_REACT_APP_HOST_URL_CORE',
          'GATSBY_REACT_APP_HOST_URL_FILE',
          'GATSBY_REACT_APP_GTM_ID',
          'GATSBY_REACT_APP_GTM_AUTH',
          'GATSBY_REACT_APP_GTM_ENV',
          'GATSBY_REACT_APP_COOKIE_DOMAIN',
          'GATSBY_REACT_APP_LOGROCKET',
          'GATSBY_REACT_APP_BUTTER',
          'GATSBY_REACT_APP_INFURA',
          'GATSBY_REACT_APP_DAI_ADDRESS',
          'GATSBY_REACT_APP_SWAP_ON',
          'GATSBY_REACT_APP_BLOOM_ATTESTATIONS',
          'GATSBY_REACT_APP_STATIC',
          'GATSBY_REACT_APP_HOST_URL',
          'GATSBY_REACT_APP_HOST_STATIC',
          'GATSBY_REACT_APP_WEB_URL'
        ]
      }
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
