
import SectionComment from "../components/SectionComment"
import styles from './CSS/ViewPost.module.css'
import Header from "../components/header_footer/Header"
import Footer from "../components/header_footer/Footer"
import {posts} from "./data.js"
import { Link } from "react-router-dom"
import RenderText from "../components/RenderText"
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
    console.log(listSrcImage)
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.contentPost}>
                    <h1>{post.title}</h1>
                    <div className={styles.inforPost}>
                        <p>Tác giả: <Link className={styles.authors} to='/view-post'>{author}</Link></p>
                        <p>Ngày đăng: {dateCurr}</p>
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
                <SectionComment/>


            </div>
            <Footer/>
        </div>
    )

}
export default ViewPost