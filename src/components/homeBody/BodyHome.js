import React from "react";
import MainStory from "./MainStory";
import SubStory from "./SubStory";
import './CSS/BodyHome.css'

import {subData,middleData} from './data.js'

function BodyHome(){
    const middle3Data = middleData.filter(item=>item.id !=0)
    return (
        <div className='container'>
            <div className='section_topstory'>
                <MainStory data={middleData[0]}/>

                <div className='sub_story'>
                    {
                        subData.map(item=>{
                            return <SubStory title={item.title} index = {item.id == 3?true:false} description={item.description}/>
                        })
                    }
                </div>
            </div>

            <div className='section_middle'>

                <div className='sub_story'>
                    {
                        middle3Data.map(item=>{
                            return <MainStory data={item} classType = 'middle-col-3'/>
                        })
                    }
                </div>


            </div>

        </div>
    )
}

export default BodyHome