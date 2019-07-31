import { useMemo } from 'react';
const useImages = name =>
  useMemo(() => `${process.env.REACT_APP_HOST_IMAGES}/images/${name}`, [name]);
export default useImages;
