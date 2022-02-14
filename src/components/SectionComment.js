import { useEffect, useState } from 'react'

import DisplayComment from './DisplayComment'
import styles from './CSS/SectionComment.module.css'
import { addCommentForNews, getListCommentOfNews } from '../api/commentAPi'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function SectionComment({newsId}){
    // console.log(newsId)
    const [inputComment,setInputComment] = useState('')
    const [listComment,setListComment] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        console.log(newsId)
        getListCommentOfNews(newsId)
        .then(res => {
            // console.log("ressss: ",res.data)
            setListComment(res.data['list_comment']);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[newsId]);
    const updateListComment = () =>{
        if(!Cookies.get('access_token')){
            alert('You must log in!')
            navigate('/login')
        }
        if(inputComment!==''){
            addCommentForNews(Cookies.get('access_token'), newsId, inputComment)
            .then(res => {
                console.log(res.data);

                let svResponse = res.data[0]['list_comment']
                // console.log('hi',svResponse)
                setListComment(svResponse)

            })
            .catch(err=>console.log(err))
            setInputComment('')
        }
    }


    return(
        <div className={styles.container}>
            <h3>Bình luận</h3>
            <div className={styles.firstSection}>
                <input placeholder='Hãy để lại bình luận của bạn' className={styles.formComment}
                    value={inputComment} onChange={e=>setInputComment(e.target.value)}
                />
                <button className={styles.submitComment} onClick={updateListComment}>Gửi</button>
            </div>

            <div className={styles.secondSection}>
                {
                    listComment.map((item,key)=>{
                        let dateTime = new Date(item['timestamp'])
                        return <DisplayComment key={key} user_name={item['nick_name']} user_avt={item['user_avt']} timestamp={dateTime.toLocaleDateString()+" "+dateTime.toLocaleTimeString()}
                                user_comment = {item['content']}
                                />
                    })
                }
            </div>
        </div>
    )

}
export default SectionComment