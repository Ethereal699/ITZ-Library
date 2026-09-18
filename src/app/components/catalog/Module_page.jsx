'use client'
import Element from "../catalog/Element";
import Element_list from "../catalog/Element_list";
import Code from "../catalog/Code";
import Code_exp from "../catalog/Code_exp";
import { useState } from "react";
import { useLanguage } from '../../i18n/LanguageContext';
import styles from '../../styles/Mod_page.module.css';

export default function Module_page(){
   const [selectedElement, setSelectedElement] = useState(null);
   const { t } = useLanguage();
   return(
     <div className={styles.module_page}>
       <aside className={styles.sidebar}>
         <Element_list onSelectElement={setSelectedElement} selectedElement={selectedElement}/>
       </aside>
       <div className={styles.mod_page_container}>
         <Element selectedElement={selectedElement}/>
         <div className={styles.mod_page} style={{ animationDelay: '0.1s' }}>
            <Code selectedElement={selectedElement} />
            <Code_exp selectedElement={selectedElement}/>
         </div>
       </div>
     </div>
   ) 
 }
