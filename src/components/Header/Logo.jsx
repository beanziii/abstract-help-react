import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logo}>Abstract</div>
      <div className={styles.help}>Help Center</div>
    </div>
  );
}

export default Logo;
