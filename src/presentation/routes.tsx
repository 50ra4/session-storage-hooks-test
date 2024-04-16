import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const TopPage = lazy(() => import('@/presentation/pages/TopPage/TopPage'));
export const ErrorPage = lazy(
  () => import('@/presentation/pages/ErrorPage/ErrorPage'),
);
const Page1 = lazy(() => import('@/presentation/pages/Page1/Page1'));
const Page2 = lazy(() => import('@/presentation/pages/Page2/Page2'));
const Page3 = lazy(() => import('@/presentation/pages/Page3/Page3'));

export const ROUTES: RouteProps[] = [
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '/1',
    element: <Page1 />,
  },
  {
    path: '/2',
    element: <Page2 />,
  },
  {
    path: '/3',
    element: <Page3 />,
  },
];
