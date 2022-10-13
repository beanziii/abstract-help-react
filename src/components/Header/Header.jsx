import styles from './Header.module.css';
import Logo from './Logo';
import HeaderControls from './HeaderControls';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderControls />
    </header>
  );
}

export default Header;
