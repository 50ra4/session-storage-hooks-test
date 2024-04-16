import React, { useEffect } from 'react';
import { useStorage } from '@/hooks/useStorage';

function Page2() {
  const { value } = useStorage({
    key: 'aaa',
    type: 'session',
    parser: (v) => v === 'true',
    stringify: (v) => `${v}`,
  });

  useEffect(() => {
    console.log('useStorage.value', value);
  });

  return (
    <main>
      <h2>Page2</h2>
      <div>Page2 component</div>
    </main>
  );
}
export default Page2;
