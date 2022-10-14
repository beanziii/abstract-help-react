import styles from './Hero.module.css';
import HeroInput from './HeroInput';

function Hero() {
  return (
    <section>
      <h1 className={styles.heading}>How can we help?</h1>
      <HeroInput />
    </section>
  );
}

export default Hero;
