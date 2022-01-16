import React, { useEffect, useState } from "react";
import MainStory from "./MainStory";
import SubStory from "./SubStory";
import styles from './CSS/BodyHome.module.css'
import clsx from "clsx";
import MediaStory from "./MediaStory";
import { getHotNews, getHotNewsByTopic, get3NewestNews } from "../../api/newsApi";
import {subData,middleData} from './data.js'
import XemNhieu from "./XemNhieu";
import rightArrow from '../../assets/rightnext.png'
import leftArrow from '../../assets/leftnext.png'
import Topic from "./Topic";

function BodyHome(){
    const [hotNews, setHotNews] = useState();
    const [hotNewsListByTopic, setHotNewsListByTopic] = useState([]);
    const [top3News, setTop3News] = useState([]);
    useEffect(() => {
        getHotNews().then(res => {
            setHotNews(res.data[0]);
        }).catch((err) => {
            console.log(err);
        });
        getHotNewsByTopic().then(res => {
            setHotNewsListByTopic(res.data);
        }).catch((err) => {
            console.log(err);
        });
        get3NewestNews().then(res => {
            setTop3News(res.data);
        }).catch((err) => {
            console.log(err);
        });
    },[])
    return (
        <div className={styles.container}>
            <div className={styles.section_1}>
                <MainStory data={hotNews}/>

                <div className={styles.sub_story}>
                    {
                        top3News.map(item=>{
                            if(item.id!=3)
                                return <SubStory title={item.title} op1 description={item.description} url_post={item.url}/>
                            else{
                                return <SubStory title={item.title} op2 description={item.description} url_post={item.url}/>
                            }
                        })
                    }
                </div>
            </div>

            <div className={styles.section_2}>

                <div className={styles.inner_middle}>
                    {
                        hotNewsListByTopic.map((item,id)=>{
                            // console.log(id)
                            return <MainStory data={item} op={id===0?1:0} classType = {true} key={item.id}/>
                        })
                    }
                </div>


            </div>

            <div className={styles.section_3}>
                
                <MediaStory/>


            </div>

            <div className={styles.section_5}>
                
                <Topic/>

            </div>

            <div className={styles.section_3}>
                
                <MediaStory/>


            </div>

            <div className={clsx(styles.section_4)}>
                
                <div className={styles.hot_keyword}>
                    <p>Thời sự</p>
                    <p>Du lịch bốn phương</p>
                    <p>Các quốc gia mở của</p>
                    <p>Kết quả vòng loại WC</p>
                </div>
                
                <div className={styles.navi_next}>
                    <img src ={leftArrow} className={styles.arrowIcon} />
                    <img src ={rightArrow} className={styles.arrowIcon} />
                </div>


            </div>

            <div className={styles.section_5}>
                <Topic/>
            </div>

            <div className={clsx(styles.section_6)}>
                <XemNhieu/>
            </div>
            

        </div>
    )
}

export default BodyHome