import styles from '../../styles/Header.module.css';
import Logo from './Logo';
export default function Header() {
return (
<header className={styles.header}>
<div className={styles.left}>
<Logo />
</div>
<div className={styles.right}>
<a href="https://github.com/inject-developer/ITZ-Library"><button  className={styles.icon} aria-label="github">GitHub</button></a>
</div>
</header>
);
}