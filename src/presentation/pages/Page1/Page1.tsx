import React from 'react';
import { useThrowError } from '@/hooks/useThrowError';

function Page1() {
  const { throwError } = useThrowError();

  return (
    <main>
      <h2>Page1</h2>
      <button
        onClick={() => {
          throwError(new Error('oops!'));
        }}
      ></button>
      <div>Page1 component</div>
    </main>
  );
}
export default Page1;
