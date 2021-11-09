import React from "react";
import './CSS/MainStory.css'
import plyImage from '../../assets/may-bay.jpg'

function MainStory(){
    return (
        <div className='main_story'>
            <h3 className='title'><a href=''>Iran diễn tập tại khu vực hơn một triệu km2</a></h3>
            <img src={plyImage} />
            <p className='description'>Quân đội Iran bắt đầu diễn tập thường niên tại khu vực ven eo biển Hormuz, khi sắp diễn ra đàm phán về thỏa thuận hạt nhân với phương Tây vào cuối tháng.</p>
            <p className='extend-description'>Diễn tập Zolfaghar-1400 bắt đầu ngày 7/11 nhằm "nâng cao khả năng sẵn sàng đối đầu với ...</p>


        </div>
    )

}

export default MainStory