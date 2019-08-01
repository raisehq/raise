import { useMemo } from 'react';
const useImages = () =>
  useMemo(() => `${process.env.REACT_APP_HOST_IMAGES}/images/${name}`, []);
export default useImages;
