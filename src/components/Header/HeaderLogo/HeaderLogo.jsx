import styles from './HeaderLogo.module.css';

function Logo() {
  return (
    <div className={styles.wrapper}>
      <div>Abstract</div>
      <a href="#" className={styles.help}>
        Help Center
      </a>
    </div>
  );
}

export default Logo;
