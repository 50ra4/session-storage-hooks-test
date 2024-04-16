import { useRef, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * @see https://usehooks-ts.com/react-hook/use-event-callback
 * @see https://zenn.dev/numa_san/articles/ca5a811227ce79
 */
export const useMemorizedCallback = <P extends unknown[], R>(
  callback: (...args: P) => R,
) => {
  const ref = useRef<typeof callback>(callback);

  useIsomorphicLayoutEffect(() => {
    ref.current = callback;
  }, [callback]);

  return useCallback((...args: P) => {
    return ref.current(...args);
  }, []);
};
