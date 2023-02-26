import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader/SiteHeader';

export const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
