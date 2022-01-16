
import styles from './CSS/ItemAdmin.module.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import axiosConfig from '../config/axiosConfig';

function ItemAdmin({title,url_image,url,news_id,deleteNews}){
    const token = Cookies.get('access_token_admin')

    const deletePost = ()=>{
        axiosConfig({
            method:'delete',
            url:'/news/delete-news',
            headers: {"Authorization" : `Bearer ${token}`},
            data:{
                news_id:news_id
            }
        })
        .then(res=>{
            console.log(res)
            if(res.data.code===200){
                alert('Delete post successfully!')
                deleteNews(news_id)
            }
        })
        .catch(err=>{
            alert(err)
        })

    }
    return (
        <div className={styles.container}>
            <img src={url_image} className={styles.image} alt='search'/>
            <div className={styles.component}>
                <p className={styles.title}>{title}</p>
                <div className={styles.optionArea}>
                    <Link to = {`/admin/view-post/${url}`} className={styles.linkPost}>
                        <p className={styles.option}>Chi tiết</p>
                    </Link>
                    <p className={styles.option} onClick={deletePost} >Xóa</p>
                </div>
            </div>
        </div>
    )
}

export default ItemAdmin