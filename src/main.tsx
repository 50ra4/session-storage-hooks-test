import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from '@/ErrorBoundary';
import { App } from '@/presentation/App';

import '@/presentation/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary
      onError={(...params) => console.error(...params)}
      fallback={() => <h1>Something went wrong.</h1>}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
