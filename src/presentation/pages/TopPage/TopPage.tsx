import React from 'react';
import { Link } from 'react-router-dom';

function TopPage() {
  return (
    <main>
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
