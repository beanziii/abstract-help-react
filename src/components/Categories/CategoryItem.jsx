import styles from './CategoryItem.module.css';

function CategoryItem(props) {
  return (
    <div className={styles.item}>
      <div>
        <img src={props.iconUrl} alt={props.title} className={styles.icon} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.content}>{props.content}</div>
        <a href="#" className={styles.link}>
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
}

export default CategoryItem;
