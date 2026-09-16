import styles from '../styles/Foter.module.css'
import Image from 'next/image';
export default function Foter(){
return(
<div className={styles.foter}>
<div className={styles.foter2}>
    <a href="https://github.com/S1lwer"><img src="github.svg" alt="" /></a>
    <a href="https://t.me/ShinyS1lwer"><img src="telega.png" alt="" /></a>
</div>
</div>
);
}