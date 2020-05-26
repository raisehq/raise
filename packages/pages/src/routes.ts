/* eslint-disable prefer-destructuring */
import { BasicLink, GatsbyLink } from './components/Links';

const REACT_APP_WEB_URL = process.env.GATSBY_REACT_APP_WEB_URL;
const REACT_APP_HOST_URL = process.env.GATSBY_REACT_APP_HOST_URL;
const REACT_APP_HOST_STATIC = process.env.GATSBY_REACT_APP_HOST_STATIC;
const routeSkeleton = {
  logo: {
    src: `${REACT_APP_HOST_STATIC}/images/logo.svg`,
    alt: 'Raise logo'
  },
  routes: [
    {
      title: 'Loan of the month',
      path: `${REACT_APP_HOST_URL}`,
      component: BasicLink
    },
    {
      title: 'Investing with Raise',
      path: `${REACT_APP_HOST_URL}/investing`,
      component: BasicLink
    },
    {
      title: 'Blog',
      path: '/blog',
      component: GatsbyLink
    },
    {
      title: 'About us',
      path: `${REACT_APP_WEB_URL}/about`,
      component: BasicLink
    }
  ],
  pageRoutes: []
};

export default routeSkeleton;
