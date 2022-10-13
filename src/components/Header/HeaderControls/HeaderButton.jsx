import styles from './HeaderButton.module.css';

function HeaderButton(props) {
  return (
    <button
      className={`${
        props.bgColor === 'blue'
          ? `${styles.btn} ${styles.btnBlue}`
          : styles.btn
      }`}
    >
      {props.title}
    </button>
  );
}

export default HeaderButton;
