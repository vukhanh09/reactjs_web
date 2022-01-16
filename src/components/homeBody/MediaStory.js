import clsx from "clsx";
import styles from './CSS/MediaStory.module.css'
import {subData} from './data.js'
import SubStory from "./SubStory";
import SubMediaStory from "./SubMediaStory";
import { useEffect, useState } from "react";
import { get3NewestNewsOfTopic } from "../../api/newsApi";

function MediaStory({subDataTopic}){
    const [top3NewestNews, setTop3NewestNews] = useState([]);

    useEffect(() => {
        get3NewestNewsOfTopic(subDataTopic).then(
            res => setTop3NewestNews(res.data)
        ).catch((err) => {
            console.log(err);
        })
    }, []);
    return(
        <div className={clsx(styles.container,'d_flex')}>
                    
            <div className={styles.first_section}>
                {
                    top3NewestNews.map(item=>{
                        if(item.id!==3)
                            return <SubStory title={item.title} op1 description={item.description}/>
                        else{
                            return <SubStory title={item.title} op2 description={item.description}/>
                        }
                    })
                }

            </div>
            <div className={styles.innerDiv}></div>
            <div className={styles.second_section}>
                <SubMediaStory subDataTopic={subDataTopic}/>
            </div>
    </div>
    )

}
export default MediaStory
