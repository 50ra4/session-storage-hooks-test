import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main>
      <h2>Error Page</h2>
      <Link to="/">TopPage</Link>
    </main>
  );
}

export default ErrorPage;
