import { ReactLink, BasicLink } from './components/Links';

const { REACT_APP_HOST_IMAGES, REACT_APP_WEB_URL } = process.env;

const routeSkeleton = {
  logo: {
    src: `${REACT_APP_HOST_IMAGES}/images/logo.svg`,
    alt: 'Raise logo'
  },
  routes: [
    {
      title: 'Dashboard',
      path: '/',
      component: ReactLink
    },
    {
      title: 'Invest with Raise',
      path: '/invest',
      component: ReactLink
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
      path: `${REACT_APP_HOST_IMAGES}/privacy-policy.pdf`,
      component: BasicLink
    },
    {
      title: 'Terms of service',
      path: `${REACT_APP_HOST_IMAGES}/toc.pdf`,
      component: BasicLink
    }
  ],
  pageRoutes: []
};

export default routeSkeleton;
