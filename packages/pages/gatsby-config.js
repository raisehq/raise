const BUTTERCMSKEY = process.env.REACT_APP_BUTTER;

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
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
          'REACT_APP_DEFAULT_NETWORK_ID',
          'REACT_APP_HOST_THEGRAPH',
          'REACT_APP_HOST_THEGRAPH_WS',
          'REACT_APP_METADATA_URL',
          'REACT_APP_HOST_IMAGES',
          'REACT_APP_HOST_URL_AUTH',
          'REACT_APP_HOST_URL_CORE',
          'REACT_APP_HOST_URL_FILE',
          'REACT_APP_GTM_ID',
          'REACT_APP_GTM_AUTH',
          'REACT_APP_GTM_ENV',
          'REACT_APP_COOKIE_DOMAIN',
          'REACT_APP_LOGROCKET',
          'REACT_APP_BUTTER',
          'REACT_APP_INFURA',
          'REACT_APP_DAI_ADDRESS',
          'REACT_APP_SWAP_ON',
          'REACT_APP_BLOOM_ATTESTATIONS',
          'REACT_APP_STATIC',
          'REACT_APP_HOST_URL',
          'REACT_APP_HOST_STATIC',
          'REACT_APP_WEB_URL'
        ]
      }
    },
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: BUTTERCMSKEY,
        pageTypes: ['page_sections', 'help', 'about']
      }
    }
  ]
};
