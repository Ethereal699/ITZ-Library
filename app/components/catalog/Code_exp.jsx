import styles from '../../styles/Code_exp.module.css';
export default function Code_exp({ selectedElement }){
    if(!selectedElement)
    return(
        <div className={styles.code_exp}>
        <div className={styles.code_exp_prev2}><h3>The code explanation will be there</h3></div>
        </div>
    )
    return(
        <div className={styles.code_exp}>
         <div className={styles.code_exp2}>
            {selectedElement.desc ? (
             <pre className={styles.desc_block}>
             
                <code>{selectedElement.desc}</code>
           
             </pre>   
            ) : (
                <p> описание еще не добавленно</p>
            )}
        
           </div> 
        </div>
        
    )
}