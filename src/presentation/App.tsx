import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ROUTES, ErrorPage } from './routes';

export function App() {
  return (
    <div>
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}
