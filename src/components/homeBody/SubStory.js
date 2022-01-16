import React from "react";
import styles from './CSS/SubStory.module.css'
import plyImage from '../../assets/may-bay.jpg'
import clsx from "clsx";


function SubStory({title,description,op1,op2,op3,url_post}){
    const classes = clsx({
        [styles.item_story]:op1,
        [styles.item_story_last] :op2,
        [styles.col_2_item] :op3
    })
    return (

            <div className={classes} href={`/view-post/${url_post}`}>
                <h3 className={styles.title}><a href={`/view-post/${url_post}`}>{title}</a></h3>
                <p className={styles.description}>{description}</p>
            </div>
            

       
    )

}

export default SubStory