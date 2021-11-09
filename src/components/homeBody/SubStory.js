import React from "react";
import './CSS/SubStory.css'
import plyImage from '../../assets/may-bay.jpg'

function SubStory({title,description,index}){
    return (
        <div>
            {!index&&<div className='item_story'>
                <h3 className='title'><a href=''>{title}</a></h3>
                <p className='description'>{description}</p>
            </div>
            }
            {
                index&&<div className='item_story_last'>
                    <h3 className='title'><a href=''>{title}</a></h3>
                    <p className='description'>{description}</p>
                </div>
            
            }
            
        </div>
       
    )

}

export default SubStory