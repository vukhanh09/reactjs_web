import { useState } from 'react'

import DisplayComment from './DisplayComment'
import styles from './CSS/SectionComment.module.css'

function SectionComment(){
    const [inputComment,setInputComment] = useState('')
    const [listComment,setListComment] = useState([])

    const updateListComment = ()=>{
        if(inputComment!==''){
            let date = new Date()
            const dateCurr = date.toLocaleString();
            setListComment(prev=> [...prev,[inputComment,dateCurr]])
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
                        return <DisplayComment key={key} user_name='vukhanh' timestamp={item[1]}
                                user_comment = {item[0]}
                                />
                    })
                }

            </div>
        </div>
    )

}
export default SectionComment