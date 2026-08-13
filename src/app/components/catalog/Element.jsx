import styles from '../../styles/Element.module.css';
export default function Element(){
    return(
        <div>
         <div className={styles.selected_element}><h3>To get started <a href='/chooseMenu'><span className={styles.link}>select element</span></a></h3></div>   
        </div>
    )
}