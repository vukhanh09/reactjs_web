import React from "react";
import MainStory from "./MainStory";
import SubStory from "./SubStory";
import styles from './CSS/BodyHome.module.css'
import clsx from "clsx";
import MediaStory from "./MediaStory";

import {subData,middleData} from './data.js'

import XemNhieu from "./XemNhieu";

function BodyHome(){
    const middle3Data = middleData.filter(item=>item.id !=0)
    return (
        <div className={styles.container}>
            <div className={styles.section_topstory}>
                <MainStory data={middleData[0]}/>

                <div className={styles.sub_story}>
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
            </div>

            <div className={styles.section_middle}>

                <div className={styles.sub_story}>
                    {
                        middle3Data.map(item=>{
                            return <MainStory data={item} classType = {true}/>
                        })
                    }
                </div>


            </div>

            <div className={clsx(styles.section_middle_2)}>
                
                <MediaStory/>
                <MediaStory/>
                <MediaStory/>
                


            </div>

            <div>
                <XemNhieu/>
            </div>
            

        </div>
    )
}

export default BodyHome