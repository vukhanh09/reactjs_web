
import { getIdPost } from '../utils/helper';
import styles from './CSS/AdminViewPost.module.css'
import clsx from 'clsx'
import { useEffect, useState } from 'react/cjs/react.development'
import Cookies from 'js-cookie';
import axiosConfig from '../config/axiosConfig';
import { submitFile } from "../api/newsApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminViewPost(){
    const displayUpdate = (id)=>{
        const res = document.getElementById(id)
        if (res.style.display === 'flex'){
            res.style.display = 'none'
        }
        else{
            res.style.display = 'flex'
        }
    }

    // const [newsView,setNewsView] = useState([])
    const [newsId,setNewsId] = useState()
    const [topic,setTopic] = useState('')
    const [author,setAuthor] = useState('')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [extend_des,setExtend_des] = useState('')
    const [content,setContent] = useState('')
    const [urlImg,setUrlImg] = useState('')

    // update information
    const [up_topic,setUpTopic] = useState('')
    const [up_author,setUpAuthor] = useState('')
    const [up_title,setUpTitle] = useState('')
    const [up_description,setUpDescription] = useState('')
    const [up_extend_des,setUpExtend_des] = useState('')
    const [up_content,setUpContent] = useState('')
    const [up_urlImg,setUpUrlImg] = useState('')
    const token = Cookies.get('access_token_admin')

    useEffect(()=>{

        var targetId = getIdPost(window.location.pathname)
        setNewsId(targetId)
        axiosConfig.get('/news/get-news-by-id',{
            params: {
                news_id : targetId
            }
        })
        .then(res =>{
            const data = res.data.data
            console.log(data)
            setTopic(data.topic)
            setAuthor(data.author)
            setTitle(data.title)
            setDescription(data.description)
            setExtend_des(data.extend_description)
            setContent(data.content.join('\n\n'))
            setUrlImg(data.url_image)
            // setNewsView(res.data.data)

        })
        .catch(err=> console.log(err))

    },[])


    const updatePost = ()=>{
        var url_image;
        submitFile()
        .then(res=>{
            url_image = res
            axiosConfig.post('/news/update-news',{
                data:{
                    title:up_title,
                    content: up_content.split('\n\n'),
                    author:up_author,
                    url_image:url_image,
                    description:up_description,
                    extend_description: up_extend_des,
                    topic:up_topic
                },
                news_id:{
                    news_id:newsId
                }
            },
            {headers: {"Authorization" : `Bearer ${token}`}})
            .then(res=>{
                if(res.status == 200){
                    toast.success("Upload post successfully!",{theme: "colored" })
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
                else{
                    toast.error("Failed to upload the post!",{theme: "colored" })
                }
            })
            .catch(err =>{
                toast.error("Failed to upload the post!",{theme: "colored" })
            })
        })
        .catch(err =>{
            toast.error("Failed to upload the image!",{theme: "colored" })
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Thông tin bài báo</div>
            <div className={styles.content}>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Chủ để</label>
                        <label className={styles.midColumn}>{topic}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(0)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={0}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                            onChange={e=>setUpTopic(e.target.value)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Tác giả</label>
                        <label className={styles.midColumn}>{author}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(1)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={1}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                            onChange={e=>setUpAuthor(e.target.value)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Tiêu đề</label>
                        <label className={styles.midColumn}>{title}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(2)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={2}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                            onChange={e=>setUpTitle(e.target.value)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Mô tả</label>
                        <label className={styles.midColumn}>{description}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(3)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={3}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate,styles.desArea)}
                            onChange={e=>setUpDescription(e.target.value)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Mô tả phụ</label>
                        <label className={styles.midColumn}>{extend_des}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(4)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={4}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate,styles.desArea)}
                            onChange={e=>setUpExtend_des(e.target.value)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Nội dung</label>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.contentPost,styles.disablePost)}
                            value={content}
                            disabled={true}
                        />
                        {/* <label className={styles.midColumn}>vukhanh0920@gmail.com</label> */}
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(5)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={5}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <textarea type='text' placeholder='Nhập thông tin...' 
                            className={clsx(styles.midColumn,styles.inputUpdate,styles.contentPost)}
                            onChange={e=>setUpContent(e.target.value)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Ảnh đính kèm</label>
                        <div className={styles.midColumn}>

                            <img src={urlImg[0]} className={styles.imgInner}/>
                        </div>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(6)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={6}>
                        <lable className={styles.column}>
                            Đính kèm ảnh
                        </lable>
                        <input class="form-control" type="file" id="formFile" name="formFile"/>
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
            </div>
            <button className={styles.updatePost} onClick={updatePost}>Cập nhật thông tin</button>
            <ToastContainer/>
        </div>
    )
}


export default AdminViewPost