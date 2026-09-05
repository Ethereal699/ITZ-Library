'use client'
import Element from "../catalog/Element";
import Element_list from "../catalog/Element_list";
import Code from "../catalog/Code";
import Code_exp from "../catalog/Code_exp";
import { useState } from "react";
import styles from '../../styles/Mod_page.module.css';

export default function Module_page(){
   const [selectedElement, setSelectedElement] = useState(null);
   return(
    <div>
     <div className={styles.mod_page}>
        <Element  selectedElement={selectedElement}/>
        <Element_list onSelectElement={setSelectedElement}/>
        <Code selectedElement={selectedElement} />
        <Code_exp selectedElement={selectedElement}/>
     </div>
     
    </div>
   ) 
}