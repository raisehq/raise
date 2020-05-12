import { GatsbyLink, BasicLink } from './components/links';

const { REACT_APP_HOST_STATIC } = process.env;

const routeSkeleton = {
  logo: {
    src: 'https://static.herodev.es/images/logo.svg',
    alt: 'Raise logo'
  },
  routes: [
    {
      title: 'About us',
      path: '/about',
      component: GatsbyLink
    },
    {
      title: 'Help',
      path: '/help',
      component: GatsbyLink
    },
    {
      title: 'Blog',
      path: '/blog',
      component: GatsbyLink
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
