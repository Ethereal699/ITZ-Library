import styles from '../styles/Header.module.css';
import Logo from './Logo';
export default function Header() {
return (
<header className={styles.header}>
<div className={styles.left}>
<Logo />
</div>
<div className={styles.right}>
<a href="https://github.com/Ethereal699/ITZ-Library/tree/my-updates"><img src="/github.svg" alt="github" className={styles.icon} /></a>
</div>
</header>
);
}