
import styles from './CSS/RenderText.module.css';
function RenderText({content,contB}){
    return (
        <div>
            <div className={styles.section}>                    
                {
                    content.map((item,index)=>{
                        return <p className={styles.text} key={index}>{item}</p>
                    })
                }
            </div>
        </div>
    )

}
export default RenderText