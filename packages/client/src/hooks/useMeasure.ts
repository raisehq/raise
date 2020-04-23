import { useCallback, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/* eslint-disable @typescript-eslint/indent */

export type ContentRect = Pick<
  DOMRectReadOnly, // eslint-disable-next-line @typescript-eslint/indent
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>;
/* eslint-enable */

const useMeasure = <T>(): [(instance: T) => void, ContentRect] => {
  const [rect, set] = useState<ContentRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  });

  const [observer] = useState(
    () =>
      new ResizeObserver(entries => {
        const entry = entries[0];
        if (entry) {
          set(entry.contentRect);
        }
      })
  );

  const ref = useCallback(
    node => {
      observer.disconnect();
      if (node) {
        observer.observe(node);
      }
    },
    [observer]
  );
  return [ref, rect];
};

export default useMeasure;
