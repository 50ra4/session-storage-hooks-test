import { useEffect, useLayoutEffect } from 'react';

/**
 * @see https://zenn.dev/stin/scraps/ec71e0bfde8973
 * @see https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
 */
export const useIsomorphicLayoutEffect =
  // TODO: isSSRに置換する
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
