import React from "react";
import './CSS/MainStory.css'
import plyImage from '../../assets/may-bay.jpg'

function MainStory({data,classType}){
    return (
        <>
           {
               !classType &&  
               <div className='main_story'>
                    <h3 className='title'><a href=''>{data.title}</a></h3>
                    <img src={data.src} />
                    <p className='description'>{data.description}</p>
                    <p className='extend-description'>{data.extend_description}</p>
                </div>
           }
           {
               classType &&  
               <div className={classType}>
                    <h3 className='topic'>{data.topic}</h3>
                    <h3 className='title'><a href=''>{data.title}</a></h3>
                    <img src={data.src} />
                    <p className='description'>{data.description}</p>
                    <p className='extend-description'>{data.extend_description}</p>
                </div>
           }
        </>
        

    )

}

export default MainStory