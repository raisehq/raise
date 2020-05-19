/* eslint-disable prefer-destructuring */
import { BasicLink, GatsbyLink } from './components/Links';

const REACT_APP_WEB_URL = process.env.REACT_APP_WEB_URL;
const REACT_APP_HOST_URL = process.env.REACT_APP_HOST_URL;
const REACT_APP_HOST_STATIC = process.env.REACT_APP_HOST_STATIC;
const routeSkeleton = {
  logo: {
    src: `${REACT_APP_HOST_STATIC}/images/logo.svg`,
    alt: 'Raise logo'
  },
  routes: [
    {
      title: 'Investment Opportunity',
      path: `${REACT_APP_HOST_URL}`,
      component: BasicLink
    },
    {
      title: 'Investing with Raise',
      path: `${REACT_APP_HOST_URL}/investing`,
      component: BasicLink
    },
    {
      title: 'About us',
      path: `${REACT_APP_WEB_URL}/about`,
      component: BasicLink
    },
    {
      title: 'Help',
      path: `${REACT_APP_WEB_URL}/help`,
      component: BasicLink
    },
    {
      title: 'Blog',
      path: '/blog',
      component: GatsbyLink
    }
  ],
  pageRoutes: []
};

export default routeSkeleton;
