import Element from "./Element";
import Element_list from "./Element_list";
import Code from "./Code";
import Code_exp from "./Code_exp";
import styles from '../../styles/Mod_page.module.css';

export default function Module_page(){
   return(
    <div>
     <div className={styles.mod_page}>
        <Element/>
        <Element_list/>
        <Code/>
        <Code_exp/>
     </div>
     
    </div>
   ) 
}