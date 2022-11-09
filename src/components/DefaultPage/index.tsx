import styles from './DefaultPage.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import { Outlet } from 'react-router-dom';
import React from 'react';

export function DefaultPage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Find your next product here!
        </div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}