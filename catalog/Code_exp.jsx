import styles from '../../styles/Code_exp.module.css';
export default function Code_exp({ selectedElement }){
    if(!selectedElement)
    return(
        <div>
        <div className={styles.code_exp}><h3>The code explanation will be there</h3></div>
        </div>
    )
    return(
        <div>
         <div className={styles.code_exp}>
            {selectedElement.desc ? (
             <pre>
                <div className={styles.code_block}>
                <p>{selectedElement.desc}</p>
                </div>
             </pre>   
            ) : (
                <p> описание еще не добавленно</p>
            )}
        
           </div> 
        </div>
        
    )
}