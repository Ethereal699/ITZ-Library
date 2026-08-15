import styles from '../../styles/Element.module.css';
export default function Element(){
    return(
        <div>
         <div className={styles.selected_element}><h3>To get started select element</h3></div>   
        </div>
    )
}