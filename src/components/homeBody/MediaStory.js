import clsx from "clsx";
import styles from './CSS/MediaStory.module.css'
import {subData} from './data.js'
import SubStory from "./SubStory";
import SubMediaStory from "./SubMediaStory";

function MediaStory(){
    const datas = subData.filter(item=>item.id!=3)
    return(
        <div className={clsx(styles.container,'d_flex')}>
                    
            <div className={styles.first_section}>
                {
                    subData.map(item=>{
                        if(item.id!=3)
                            return <SubStory title={item.title} op1 description={item.description}/>
                        else{
                            return <SubStory title={item.title} op2 description={item.description}/>

                        }
                    })
                }

            </div>
            <div className={styles.innerDiv}></div>
            <div className={styles.second_section}>
                <SubMediaStory/>
            </div>
        


    </div>
    )

}
export default MediaStory
