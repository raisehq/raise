import { useEffect } from 'react';

export default function useEffectAsync(effect, destroy?, inputs?) {
  const hasDestroy = typeof destroy === 'function';

  useEffect(
    () => {
      let result;
      let mounted = true;

      const maybePromise = effect(() => mounted);

      Promise.resolve(maybePromise).then((value) => {
        result = value;
      });

      return () => {
        mounted = false;

        if (hasDestroy) {
          destroy(result);
        }
      };
    },
    hasDestroy ? inputs : destroy
  );
}
