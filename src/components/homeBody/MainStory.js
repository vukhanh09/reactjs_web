import React from "react";
import styles from './CSS/MainStory.module.css'
import plyImage from '../../assets/may-bay.jpg'

function MainStory({data,classType}){
    return (
        <>
           {
               !classType &&  
               <div className={styles.main_story}>
                    <h3 className={styles.title}><a href=''>{data.title}</a></h3>
                    <img src={data.src} />
                    <p className={styles.description}>{data.description}</p>
                    <p className={styles.extend_description}>{data.extend_description}</p>
                </div>
           }
           {
               classType &&  
               <div className={styles.middle_col_3}>
                    <h3 className={styles.topic}>{data.topic}</h3>
                    <h3 className={styles.title}><a href=''>{data.title}</a></h3>
                    <img src={data.src} />
                    <p className={styles.description}>{data.description}</p>
                    <p className={styles.extend_description}>{data.extend_description}</p>
                </div>
           }
        </>
        

    )

}

export default MainStory