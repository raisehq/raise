import LocalData from './localData';

const getHeaderAuth = () => {
  const auth = LocalData.getObj('auth');

  if (auth && auth.token) {
    return {
      Authorization: `Bearer ${auth.token}`
    };
  }

  throw new Error(' NO TOKEN AUTH ');
};

export default { getHeaderAuth };
