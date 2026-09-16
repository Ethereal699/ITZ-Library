import styles from "../styles/Foter.module.css"
export default function Window(){
return(
<div className={styles.window}>
<div className={styles.window2}>

<div className={styles.itz}>ITZ</div>
<div className={styles.lineVdesc}></div>

<div className={styles.fast}><p>Библиотека 'ITZ' это продукт для пользователей которым сложно или не понятно читать документацию</p></div>

<div className={styles.lineGdesc}></div>
<div className={styles.lineGbtnSec}></div>
<div className={styles.lineGbtnSec2}></div>

<div className={styles.desc}>'ITZ' это не просто библиотека, это простой и понятный сборник различных элементов, сочетающий минималистичный дизайн, простой и понятный в использовании интерфейс, и главную изюминку приложения объяснение кода,
все просто, выбрал элемент , посмотрел как он выглядит , увидел код и объяснение работы элемента. 
</div>
<a className={styles.btn} href="/catalog"><div >Start</div></a>

</div>
</div>
);
}