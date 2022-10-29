import styles from './DefaultPage.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import { Outlet } from 'react-router-dom';

export function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Find your next reactive meal!
        </div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}