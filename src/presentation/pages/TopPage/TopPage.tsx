import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStorage } from '@/hooks/useStorage';

const Initializer = () => {
  // const [searchParams] = useSearchParams();
  const { setValue } = useStorage({
    key: 'aaa',
    type: 'session',
    parser: (v) => v === 'true',
    stringify: (v) => `${v}`,
  });

  useEffect(() => {
    // #の前に付ける場合
    const param = new URLSearchParams(window.location.search).get('env');
    // #の後ろに?を付ける場合
    // const param = searchParams.get('env');
    console.log(param);
    const isAlpha1 = param === 'alpha1';
    setValue(isAlpha1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

function TopPage() {
  return (
    <main>
      <Initializer />
      <h2>TopPage</h2>
      <div>TopPage component</div>
      <ul>
        <li>
          <Link to="/1">Page1</Link>
        </li>
        <li>
          <Link to="/2">Page2</Link>
        </li>
        <li>
          <Link to="/3">Page3</Link>
        </li>
      </ul>
    </main>
  );
}

export default TopPage;
