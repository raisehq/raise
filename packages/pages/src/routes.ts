/* eslint-disable prefer-destructuring */
import { BasicLink } from './components/links';

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
      title: 'Investment Oportunity',
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
      path: `${REACT_APP_WEB_URL}/blog`,
      component: BasicLink
    }
  ],
  pageRoutes: []
};

export default routeSkeleton;
