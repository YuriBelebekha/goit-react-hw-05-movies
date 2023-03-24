import { AppBar } from 'components/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense }  from 'react';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.Container}>
      <AppBar />
      
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};