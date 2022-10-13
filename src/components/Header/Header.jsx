import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderControls from './HeaderControls/HeaderControls';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderControls />
    </header>
  );
}

export default Header;
