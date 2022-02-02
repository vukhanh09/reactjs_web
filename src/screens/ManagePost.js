import AdminTool from "../components/AdminTool"
import styles from "./CSS/ManagePost.module.css"

import { useEffect,useState } from "react"
import ItemAdmin from "../components/ItemAdmin"
import Cookies from 'js-cookie';
import axiosConfig from '../config/axiosConfig';
import { setListPostState } from "../redux/actions/postAction";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function ManagePost(){


     // check token
    let navigate = useNavigate();
    const adminIsLogin = ()=>{
        if(!Cookies.get('access_token_admin')){
            alert('You must log in!')
            navigate('/admin/login')
        }
    }


    const dispatch = useDispatch();
    const url = 'https://static01.nyt.com/images/2020/11/25/dining/23leftoversrex1-copy/merlin_179868645_ccb9d1b4-9544-4368-afa4-c5fa354aa794-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale'
    const title = 'Best Thanksgiving Leftovers Sandwich'
    const [searchTitle,setTitle] = useState('')
    // const [listNews,setListNews] = useState([])
    const [topicRender,setTopicRender] = useState('')
    const [optionRender,setOptionRender] = useState('')
    const dictTopic = {'thoisu':'Thời sự','gocnhin':'Góc nhìn','thegioi':'Thế giới','kinhdoanh':'Kinh doanh','dulich':'Du lịch','none':''}
    const { listPosts } = useSelector(state => state.userReducer);

    useEffect(()=>{
        
        adminIsLogin()


        // console.log(optionRender)
        if(topicRender === '' && searchTitle === '')
            axiosConfig.get('/news/get-all-news')
            .then(res=>{
                // var lsNews = res.data.data.listNews
                console.log(res.data.data.listNews)
                dispatch(setListPostState(res.data.data.listNews))
            })
            .catch(err=>{
                console.log(err)
                dispatch(setListPostState([]))
            })
        else {
            console.log(topicRender)
            axiosConfig.get('/news/get-news-by-topic',{
                params:{
                    topic: topicRender,
                    title:searchTitle
                }
            })
            .then(res=>{
                // var lsNews = res.data.data.listNews
                dispatch(setListPostState(res.data.data.listNews))
            })
            .catch(err=>{
                dispatch(setListPostState([]))
                console.log(err)
            })

        }
    },[optionRender])


    const deleteNews = (id)=>{
        const newList = listPosts.filter(item=>item.news_id!=id)
        dispatch(setListPostState(newList))
    }
    
    
    
    
    const handleSearch = ()=>{
        let topic = dictTopic[document.getElementById("topics").value]
        setTopicRender(topic)
        setOptionRender(topic+searchTitle)
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
                        listPosts.map((item,id) =>{
                            return <ItemAdmin key={item.news_id} url_image = {item.url_image[0]} title={item.title} url={item.url} news_id = {item.news_id} deleteNews={deleteNews}/>
                        })
                    }
                </div>
    
            </div>

        </div>
    )

}
export default ManagePost