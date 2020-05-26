import { useEffect } from 'react';
import useGoogleTagManager from '../../hooks/useGoogleTagManager';

const TagManager = () => {
  const tagManager = useGoogleTagManager();

  useEffect(() => {
    tagManager.initialize();
  }, []);
  return null;
};

export default TagManager;
