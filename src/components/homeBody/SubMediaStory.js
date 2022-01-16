import clsx from "clsx";
import styles from './CSS/SubMediaStory.module.css'
import {subData} from './data.js'
import SubStory from "./SubStory";
import ImageStory from "./ImageStory";
import {middleData} from './data.js'
import { useState } from "react";


function SubMediaStory(){
    const [top3WorldNews, setTop3WorldNews] = useState([]);
    const middle3Data = middleData.filter(item=>item.id !==0)
    return(
        <div className={styles.container}>
            <h3>Thế giới</h3>
            <ImageStory data={middle3Data[0]} op1/>
            <ImageStory data={middle3Data[1]} op1/>
            <ImageStory data={middle3Data[1]} op2/>


        </div>
    )

}
export default SubMediaStory
