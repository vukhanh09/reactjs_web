import { useEffect, useState } from "react"
import SectionComment from "../components/SectionComment"
import styles from './CSS/ViewPost.module.css'
import Header from "../components/header_footer/Header"
import Footer from "../components/header_footer/Footer"
import {posts} from "./data.js"
import { Link } from "react-router-dom"
import RenderText from "../components/RenderText"
import red_love from '../assets/red_love.png'
import black_love from '../assets/black_love.png'
import bookmarkImage from '../assets/bookmark.png'
import { getIdPost } from "../utils/helper"
import {getNewsById} from "../api/newsApi"
import { addNewsToWatchLater } from "../api/watchLaterApi"
import Cookies from "js-cookie"

function ViewPost(){
    const targetId = getIdPost(window.location.pathname);
    const [news, setNews] = useState('');
    useEffect(() => {
        getNewsById(targetId).then(
            res => {
                // console.log(res);
                const new_data = splitContent(res.data)
                console.log('news_data',new_data);
                setNews(new_data);
                
            }
        )
        
    },[]);
    const splitContent = (news) =>{
        const content = news.content
        const lenContent = content.length
        const midContent = Math.floor(lenContent/2)
        const contA = content.slice(0,midContent)
        const contB = content.slice(midContent,lenContent)
        news.contA = contA
        news.contB = contB
        return news
    }

    const addToWatchLater = (newsId, topic) => {
        addNewsToWatchLater(Cookies.get('access_token'),newsId, topic)
        .then(res => console.log(res))
    }

    const [likePostImg,setLikePostImg] = useState([black_love,'black'])

    const handleLikePost = ()=>{
        if(likePostImg[1]==='black'){
            setLikePostImg([red_love,'red'])
        }
        else{
            setLikePostImg([black_love,'black'])
        }
    }

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.firstContent}>
                    <div className={styles.utilitiesArea}>
                        <div className={styles.storePostArea}>
                            <img src={bookmarkImage} className={styles.imagelikePost} />
                            <p>Xem sau</p>
                        </div>

                        <div className={styles.likeArea}>
                            <img src={likePostImg[0]} className={styles.imagelikePost}
                                onClick={handleLikePost}
                            />
                            <p>160 likes</p>
                        </div>
                    </div>

                    <div className={styles.contentPost}>
                        <h1>{news.title}</h1>
                        <div className={styles.inforPost}>
                            <p>Tác giả: <Link className={styles.authors} to='/view-post'>{news?.author}</Link></p>
                            <div className={styles.extendInfor}>
                                <p>Ngày đăng: {news?.add_time}</p>
                                <p className={styles.totalView}>Lượt xem: {news?.views}</p>
                            </div>
                        </div>

                        <p className={styles.description}>{news.description}</p>
                        {
                            news.url_image?.length<2 && 
                            <div>
                                <RenderText content={news.contA}/>
                                <img src={news.url_image[0]} className={styles.image}/>
                                <RenderText content={news.contB}/>
                            </div>
                        }
                        {
                            news.url_image?.length >= 2 && 
                            <div>
                                <img src={news.url_image[0]} className={styles.image}/>
                                <RenderText content={news.contA}/>
                                <img src={news.url_image[1]} className={styles.image}/>
                                <RenderText content={news.contB}/>
                            </div>
                        }
                        


                    </div>

                </div>
                
                <SectionComment/>


            </div>
            <Footer/>
        </div>
    )

}
export default ViewPost