import styles from './HeaderControls.module.css';
import HeaderButton from './HeaderButton';

function HeaderControls() {
  return (
    <div className={styles.headerControls}>
      <HeaderButton title="Submit a request"></HeaderButton>
      <HeaderButton title="Sign in" bgColor="blue"></HeaderButton>
    </div>
  );
}

export default HeaderControls;
