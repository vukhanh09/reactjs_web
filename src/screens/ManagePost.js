import AdminTool from "../components/AdminTool"
import styles from "./CSS/ManagePost.module.css"

import { useEffect,useState } from "react"
import ItemAdmin from "../components/ItemAdmin"
import Cookies from 'js-cookie';
import axiosConfig from '../config/axiosConfig';

function ManagePost(){
    const url = 'https://static01.nyt.com/images/2020/11/25/dining/23leftoversrex1-copy/merlin_179868645_ccb9d1b4-9544-4368-afa4-c5fa354aa794-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'
    const title = 'Best Thanksgiving Leftovers Sandwich'
    const [searchTitle,setTitle] = useState('')
    const [listNews,setListNews] = useState([])

    useEffect(()=>{
        axiosConfig.get('/news/get-all-news')
        .then(res=>{
            // var lsNews = res.data.data.listNews
            setListNews(res.data.data.listNews)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])
    
    const middleData = [
        {
            id:0,
            topic:'Thế giới',
            title:'Iran diễn tập tại khu vực hơn một triệu km2',
            src:'https://i1-kinhdoanh.vnecdn.net/2021/11/12/11-11-2021-07-44-11-tan3779-co-8548-6679-1636694451.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=4uZuDktCE1fc1ZfCjrIxvg',
            description:'Quân đội Iran bắt đầu diễn tập thường niên tại khu vực ven eo biển Hormuz, khi sắp diễn ra đàm phán về thỏa thuận hạt nhân với phương Tây vào cuối tháng.',
            extend_description:'Diễn tập Zolfaghar-1400 bắt đầu ngày 7/11 nhằm "nâng cao khả năng sẵn sàng đối đầu với ...'
        },
        {
            id:1,
            topic:'Thời sự',
            title:'Chủ tịch Quốc hội: Gói kích thích không chỉ để phục hồi kinh tế mà còn phát triển xã hội',
            src:'https://i1-kinhdoanh.vnecdn.net/2021/11/12/11-11-2021-07-44-11-tan3779-co-8548-6679-1636694451.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=4uZuDktCE1fc1ZfCjrIxvg',
            description:'Chủ tịch Quốc hội Vương Đình Huệ lưu ý khi xây dựng chương trình khôi phục kinh tế cần chú trọng cả tổng cung lẫn tổng cầu, tức cả việc phục hồi, phát triển xã hội.',
            extend_description:'Các bang đệ đơn kiện chính quyền Tổng thống Mỹ gồm Missouri, Nebraska, Arkansas, Kansas ...'
        },
        {
            id:2,
            topic:'Thế giới',
            title:'10 bang kiện chính quyền Biden',
            src:'https://i1-vnexpress.vnecdn.net/2021/11/12/anhcat20210726T190838Z15276005-8804-1693-1636706474.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=qNFX-qionM8rMpN9wz6fgA',
            description:'Tổng chưởng lý 10 bang Mỹ kiện chính quyền Tổng thống Joe Biden lên tòa liên bang vì quy định bắt buộc nhân viên y tế tiêm vaccine Covid-19.',
            extend_description:'Các bang đệ đơn kiện chính quyền Tổng thống Mỹ gồm Missouri, Nebraska, Arkansas, Kansas ...'
        },
        {
            id:4,
            topic:'Thể thao',
            title:'Chủ tịch PSG mong Mbappe tiếp bước Messi',
            src:'https://i1-thethao.vnecdn.net/2021/11/30/Untitled-5836-1638238730.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=8h7r6xxbg1EBwv48hr9N-A',
            description:'Nasser Al-Khelaifi hy vọng Kylian Mbappe sẽ giành Quả Bóng Vàng khi khoác áo PSG như Lionel Messi.',
            extend_description:'Khi Taliban áp sát thủ đô Kabul hôm 15/8, đội ...'
        }]
    


    const handleSearch = ()=>{
        // console.log(document.getElementById("topics").value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftElement}>
                <AdminTool/>
            </div>
            <div className={styles.inner}></div>
            <div className={styles.rightElement}>
                <h3 className={styles.title}>Quản lý bài viết</h3>
                <div className={styles.searchAcc}>

                    <div className={styles.fieldSearch}>
                        <label>Chủ đề</label><br/>
                        <select name="topic" id="topics" className={styles.fieldOp}>
                            <option value="none">None</option>
                            <option value="thoisu">Thời sự</option>
                            <option value="gocnhin">Góc nhìn</option>
                            <option value="thegioi">Thế giới</option>
                            <option value="kinhdoanh">Kinh doanh</option>
                            <option value="dulich">Du lịch</option>
                        </select>
                    </div>
                    <div className={styles.fieldSearch}>
                        <label>Tiêu đề</label><br/>
                        <input type='text' id ='fullName' className={styles.searchArea} onChange={e=> setTitle(e.target.value)}/>
                    </div>

                    <button className={styles.searchBtn} onClick={handleSearch}>Tìm kiếm</button>

                </div>
                <div className={styles.parentPost}>
                    {
                        listNews.map((item,id) =>{
                            return <ItemAdmin key={id} url_image = {item.url_image[0]} title={item.title} url={item.url} />
                        })
                    }

                    {/* <ItemAdmin url = {url} title={title} />
                    <ItemAdmin url = {url} title={title} />
                    <ItemAdmin url = {url} title={title} />
                    <ItemAdmin url = {url} title={title} />
                    <ItemAdmin url = {url} title={title} /> */}

                </div>
    
            </div>

        </div>
    )

}
export default ManagePost