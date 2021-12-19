import { dataToppic } from "./dataTopic"
import styles from './CSS/Topic.module.css'
import SubTopic from "./SubTopic"

function Topic(){
    return(
        <div className={styles.container}>
            <h3>
                
                {dataToppic.topic}
            
            </h3>
            <div className={styles.content}>
                {
                    dataToppic.content.map(item=>{
                        return <SubTopic key={item.id} data={item} op={item.id===1?1:0}/>
                    })
                }

            </div>
        </div>

    )
}
export default Topic