import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export function Navbar() {
  const routes = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Catalog',
    to: '/catalog'
  }, {
    label: 'About',
    to: '/about'
  }];
  return (
    <nav className={styles.navbar}>
      <Logo height={40} />
      <ul className={styles.navbar__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.navbar__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}