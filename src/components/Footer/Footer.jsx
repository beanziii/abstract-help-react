import styles from './Footer.module.css';
import FooterCol from './FooterCol';

function Footer() {
  const cols = [
    { title: 'Abstract', links: ['Start Trial', 'Pricing', 'Download'] },
    {
      title: 'Resources',
      links: ['Blog', 'Help Center', 'Release Notes', 'Status'],
    },
    {
      title: 'Community',
      links: ['Twitter', 'LinkedIn', 'Facebook', 'Dribble', 'Podcast'],
    },
  ];

  return (
    <footer className={styles.footer}>
      {cols.map((col) => (
        <FooterCol
          key={Math.random().toString()}
          title={col.title}
          links={col.links}
        />
      ))}
    </footer>
  );
}

export default Footer;
