import styles from './FooterCol.module.css';

function FooterCol(props) {
  return (
    <ul className={styles.list}>
      <h4 className={styles.title}>{props.title}</h4>
      {props.links.map((link) => (
        <li key={Math.random().toString()}>
          <a className={styles.link}>{link}</a>
        </li>
      ))}
    </ul>
  );
}

export default FooterCol;
