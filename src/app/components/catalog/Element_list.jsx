import { useState } from "react";
import styles from "../../styles/Menu.module.css";

 export default function Element_list(){
    return(
    <div className={styles.menu}>
<ul>
    <li>кнопка</li>
    <li>модальное окно</li>
    <li>навигационная панель</li>
    <li>панель входа</li>
    <li>карты</li>
</ul>
    </div>
  ); 
 }



