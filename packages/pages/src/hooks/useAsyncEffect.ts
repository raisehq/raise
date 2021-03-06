import { useEffect } from 'react';

export default function useEffectAsync(effect: any, destroy?: any, inputs?: any) {
  const hasDestroy = typeof destroy === 'function';

  useEffect(
    () => {
      let result: any;
      let mounted = true;

      const maybePromise = effect(() => mounted);

      Promise.resolve(maybePromise)
        .then((value) => {
          result = value;
        })
        .catch((error) => {
          console.error('[useAsyncEffect][Error] ', error);
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
