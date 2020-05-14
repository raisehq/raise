/* eslint-disable prefer-destructuring */
import { BasicLink } from './components/links';

const REACT_APP_WEB_URL = process.env.REACT_APP_WEB_URL;
const REACT_APP_HOST_STATIC = process.env.REACT_APP_HOST_STATIC;

const routeSkeleton = {
  logo: {
    src: 'https://static.herodev.es/images/logo.svg',
    alt: 'Raise logo'
  },
  routes: [
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
    },
    {
      title: 'Privacy Policy',
      path: `${REACT_APP_HOST_STATIC}/privacy-policy.pdf`,
      component: BasicLink
    },
    {
      title: 'Terms of service',
      path: `${REACT_APP_HOST_STATIC}/toc.pdf`,
      component: BasicLink
    }
  ],
  pageRoutes: []
};

export default routeSkeleton;
