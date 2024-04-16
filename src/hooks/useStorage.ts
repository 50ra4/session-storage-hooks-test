import { useCallback, useEffect, useState } from 'react';
import { useMemorizedCallback } from './useMemorizedCallback';
import { useWindowEventListener } from './useWindowEventListener';

type Storage = 'session' | 'local';

declare global {
  interface WindowEventMap {
    sessionStorage: CustomEvent;
    localStorage: CustomEvent;
  }
}

const storageKeys = ['aaa', 'bbb'] as const;
type StorageKey = (typeof storageKeys)[number];

const isSSR = typeof window === 'undefined';

/**
 * @see https://usehooks-ts.com/react-hook/use-session-storage
 */
export const useStorage = <T = Record<string, unknown>>({
  type,
  key,
  parser,
  stringify,
}: {
  type: Storage;
  key: StorageKey;
  parser: (v: string) => T;
  stringify: (v: T) => string;
}) => {
  const storageType = type === 'local' ? 'localStorage' : 'sessionStorage';

  const read = useCallback(() => {
    if (isSSR) {
      // SSRの場合
      return null;
    }
    try {
      const raw = window[storageType].getItem(key);
      return raw ? parser(raw) : null;
    } catch (error) {
      console.warn(`Error reading ${storageType} key “${key}”:`, error);

      // failの場合
      return null;
    }
  }, [storageType, key, parser]);

  const [storedValue, setStoredValue] = useState(() => read());

  useEffect(() => {
    setStoredValue(read());
    // NOTICE: keyの変更のみを検知して実行する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue: typeof setStoredValue = useMemorizedCallback((action) => {
    if (isSSR) {
      console.warn('useStorage.setValue does not support SSR.', {
        storageType,
        key,
      });
    }

    try {
      const newValue = action instanceof Function ? action(read()) : action;

      if (newValue) {
        window[storageType].setItem(key, stringify(newValue));
      } else {
        window[storageType].removeItem(key);
      }

      setStoredValue(newValue);

      window.dispatchEvent(new StorageEvent(storageType, { key }));
    } catch (error) {
      console.warn(`Error setting ${storageType} key “${key}”:`, error);
    }
  });

  const removeValue = useMemorizedCallback(() => {
    if (isSSR) {
      console.warn('useStorage.removeValue does not support SSR.', {
        storageType,
        key,
      });
    }

    window[storageType].removeItem(key);
    setStoredValue(null);

    window.dispatchEvent(new StorageEvent(storageType, { key }));
  });

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ('key' in event && event.key !== key) {
        return;
      }
      setStoredValue(read());
    },
    [key, read],
  );

  useWindowEventListener('storage', handleStorageChange);
  useWindowEventListener(storageType, handleStorageChange);

  return {
    value: storedValue,
    setValue,
    removeValue,
  };
};
