import clsx from "clsx";
import styles from './CSS/SubMediaStory.module.css'
import {subData} from './data.js'
import SubStory from "./SubStory";
import ImageStory from "./ImageStory";
import {middleData} from './data.js'
import { useEffect, useState } from "react";
import { getTop3NewsTopic } from "../../api/newsApi";


function SubMediaStory({subDataTopic}){
    const [top3TopicNews, setTop3TopicNews] = useState([]);

    useEffect(() => {
        getTop3NewsTopic(subDataTopic).then( res => {
            setTop3TopicNews(res.data)
        }).catch((err) => {
            console.log(err);
        })
    },[]);
    return(
        <div className={styles.container}>
            <h3>{subDataTopic}</h3>
            <ImageStory data={top3TopicNews[0]} op1/>
            <ImageStory data={top3TopicNews[1]} op1/>
            <ImageStory data={top3TopicNews[2]} op2/>


        </div>
    )

}
export default SubMediaStory
