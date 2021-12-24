import { useState } from "react"
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


function ViewPost(){
    const post = posts[0]
    const author = 'Tuấn Nguyễn'
    let date = new Date()
    const dateCurr = date.toLocaleString();
    const splitContent = ()=>{
        const listSrcImage = post.url_image
        const content = post.content
        const lenContent = content.length
        const midContent = Math.floor(lenContent/2)
        const contA = content.slice(0,midContent)
        const contB = content.slice(midContent,lenContent)
        return [listSrcImage,contA,contB]
    }
    const [listSrcImage,contA,contB] = splitContent()


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
                            <img src={bookmarkImage} className={styles.imagelikePost}/>
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
                        <h1>{post.title}</h1>
                        <div className={styles.inforPost}>
                            <p>Tác giả: <Link className={styles.authors} to='/view-post'>{author}</Link></p>
                            <div className={styles.extendInfor}>
                                <p>Ngày đăng: {dateCurr}</p>
                                <p className={styles.totalView}>Lượt xem: {5}</p>
                            </div>
                        </div>

                        <p className={styles.description}>{post.description}</p>

                        {
                            listSrcImage.length<2 && 
                            <div>
                                <RenderText content={contA}/>
                                <img src={listSrcImage[0]} className={styles.image}/>
                                <RenderText content={contB}/>
                            </div>
                        }
                        {
                            listSrcImage.length >= 2 && 
                            <div>
                                <img src={listSrcImage[0]} className={styles.image}/>
                                <RenderText content={contA}/>
                                <img src={listSrcImage[1]} className={styles.image}/>
                                <RenderText content={contB}/>
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