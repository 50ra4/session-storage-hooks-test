import { useEffect, useState } from 'react';

export const useThrowError = () => {
  const [error, throwError] = useState<Error | null>(null);
  useEffect(() => {
    if (!error) return;
    throw error;
  }, [error]);

  return { throwError };
};
