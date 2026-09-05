import styles from '../styles/Hero.module.css';
import Button from './Button';
export default function Hero() {
return (
<section className={styles.hero}>
<div className={styles.kicker}><span className={styles.sep}></span> <strong>ITZ-Library</strong></div>
<h1 className={styles.title}>
<span className={styles.accent}>Ready to use</span>
</h1>
<p className={styles.lead}>
ITZ-Library is an open-source React component library.
It's comprehensive and can be used in production out of the box.
</p>
<a href="/catalog"><Button>Get started ▸</Button></a>
</section>
);
}