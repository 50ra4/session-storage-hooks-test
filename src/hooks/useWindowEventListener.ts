import { useRef, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * @see https://usehooks-ts.com/react-hook/use-event-listener
 */
export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener: typeof handler = (event) => {
      savedHandler.current(event);
    };
    window.addEventListener(type, listener, options);

    return () => {
      window.removeEventListener(type, listener, options);
    };
  }, [options, type]);
};
