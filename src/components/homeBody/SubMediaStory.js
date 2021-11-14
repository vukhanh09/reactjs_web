import clsx from "clsx";
import styles from './CSS/SubMediaStory.module.css'
import {subData} from './data.js'
import SubStory from "./SubStory";

function SubMediaStory(){
    const datas = subData.filter(item=>item.id!=3)
    return(
        <div className={styles.container}>
            <div className={styles.row_1}>
                <h2>Hello</h2>

            </div>
            <div className={styles.row_2}>
                {
                    datas.map(data=>{
                        return <SubStory title={data.title} description={data.description} op3 key={data.id}/>
                    })
                }

            </div>

        </div>
    )

}
export default SubMediaStory
