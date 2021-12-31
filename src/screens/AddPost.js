import AdminTool from "../components/AdminTool"
import { useEffect,useState } from 'react';
import styles from "./CSS/AddPost.module.css"

function AddPost(){
    const [topic,setTopic] = useState('')
    const [author,setAuthor] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [extend_des,setExtend_des] = useState('')
    const [content,setContent] = useState('')
    const [urlImg,setUrlImg] = useState('')
    console.log(topic)
    console.log(author)
    console.log(title)
    console.log(description)
    console.log(extend_des)
    console.log(content)
    console.log(urlImg)

    return (
        <div className={styles.container}>
            <div className={styles.leftElement}>
                <AdminTool/>
            </div>
            <div className={styles.inner}></div>
            <div className={styles.rightElement}>
                <h3 className={styles.title}>Add Post</h3>
                <div className={styles.formAddPost}>
                    <div className={styles.leftColumn}>

                        <div className={styles.fieldSearch}>
                            <label>Chủ đề</label>
                            <input type='text' className={styles.searchArea} onChange={e=> setTopic(e.target.value)}/>
                        </div>

                        <div className={styles.fieldSearch}>
                            <label>Tác giả</label>
                            <input type='text' className={styles.searchArea} onChange={e=> setAuthor(e.target.value)}/>
                        </div>

                        <div className={styles.fieldSearch}>
                            <label>Tiêu đề</label>
                            <input type='text' className={styles.searchArea} onChange={e=> setTitle(e.target.value)}/>
                        </div>

                        <div className={styles.fieldSearch}>
                            <label>Mô tả</label>
                            <textarea type='text' className={styles.desArea}onChange={e=> setDescription(e.target.value)}/>
                        </div>

                        <div className={styles.fieldSearch}>
                            <label>Mô tả phụ</label>
                            <textarea type='text' className={styles.desArea} onChange={e=> setExtend_des(e.target.value)}/>
                        </div>

                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.fieldSearch}>
                            <label>Nội dung</label>
                            <textarea type='text' className={styles.contentPost} onChange={e=> setContent(e.target.value)}/>
                        </div>
                        <div className={styles.fieldSearch}>
                            <label>Đính kèm url của ảnh</label>
                            <textarea type='text' className={styles.desArea} onChange={e=> setUrlImg(e.target.value)}/>
                        </div>


                    </div>

                </div>
                <button className={styles.searchBtn}>Thêm sản phẩm</button>
    
            </div>

        </div>
    )

}
export default AddPost