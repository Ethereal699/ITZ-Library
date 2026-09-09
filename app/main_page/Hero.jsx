import styles from '../styles/Hero.module.css';
import BigWindow from './BigWindow'
import Foter from './Foter';
export default function Hero() {
return (
<section className={styles.hero}>
<Foter/>
<BigWindow/>
</section>
);
}