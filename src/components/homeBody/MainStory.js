import React from "react";
import styles from './CSS/MainStory.module.css'
import plyImage from '../../assets/may-bay.jpg'
import clsx from "clsx";

function MainStory({data,classType,op}){
    const classes = clsx({
        [styles.container_1]:op,
        [styles.container_2] :!op
    })
    return (
        <>
           {
               !classType &&  
               <div className={styles.main_story} href={`/view-post/${data?.url}`}>
                    <h3 className={styles.title}><a href={`/view-post/${data?.url}`}>{data?.title}</a></h3>
                    <img src={data?.url_image[0]} />
                    <p className={styles.description}>{data?.description}</p>
                    <p className={styles.extend_description}>{data?.extend_description}</p>
                </div>
           }
           {
               classType &&  
               <div className={clsx(styles.middle_col_3,classes)}>
                    <h3 className={styles.topic}>{data?.topic}</h3>
                    <h3 className={styles.title}><a href={`/view-post/${data?.url}`}>{data?.title}</a></h3>
                    <img src={data?.url_image[0]} />
                    <p className={styles.description}>{data?.description}</p>
                    <p className={styles.extend_description}>{data?.extend_description}</p>
                </div>
           }
        </>

    )

}

export default MainStory