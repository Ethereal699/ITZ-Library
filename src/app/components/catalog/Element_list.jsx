import styles from '../../styles/Element_list.module.css';

export default function Element_list(){
    return(
        <div>
        <div className={styles.el_list}>
         <ul>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
            <li>Element 5</li>
         </ul>
        </div>
        </div>
    )
}