import styles from './HeaderLogo.module.css';

function Logo() {
  return (
    <div className={styles.wrapper}>
      <div>Abstract</div>
      <div className={styles.help}>Help Center</div>
    </div>
  );
}

export default Logo;
