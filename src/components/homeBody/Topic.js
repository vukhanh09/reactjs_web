import styles from './CSS/Topic.module.css'
import SubTopic from "./SubTopic"
import { useEffect, useState } from "react"
import { getTop4Tourism } from "../../api/newsApi"

function Topic(){
    const [dataTopic, setDataTopic] = useState([])
    useEffect(() => {
        getTop4Tourism()
        .then( res => {
            setDataTopic(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return(
        <div className={styles.container}>
            <h3>
                
                {dataTopic[0]?.topic}
            
            </h3>
            <div className={styles.content}>
                {
                    dataTopic?.map((item, index)=>{
                        return <SubTopic key={index} data={item} op={index===0?1:0}/>
                    })
                }

            </div>
        </div>

    )
}
export default Topic