import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(() => null);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => null;
  }, [delay]);
};

export default useInterval;
