import Header from '../components/header_footer/Header';
import Footer from '../components/header_footer/Footer';
import SearchView from '../components/searchView';
import FormSearch from '../components/formSearch';
import react, {useState,useEffect} from "react"

import styles from './CSS/ViewLater.module.css'
import clsx from "clsx"
import ItemSearch from "../components/ItemSearch";
import { getListWatchLaterNews } from '../api/watchLaterApi';
import Cookies from 'js-cookie';
import { getNewsById } from '../api/newsApi';

function ViewLater(){
    const [listNews, setListNews] = useState([]);
    useEffect(() => {
        getListWatchLaterNews(Cookies.get('access_token'))
        .then(res => {
            console.log(res.data);
            let listNewsId = res.data;
            for(let i in listNewsId){
                console.log(listNewsId[i]['news_id'])
                getNewsById(listNewsId[i]['news_id'])
                .then(res => {
                    setListNews((prev) => [...prev,res.data]);
                })
            }
        })
        .catch(err=>console.log(err))
    },[]);

    return (
        <div className={styles.TimKiem}>
            <Header/>
            <div className={styles.container}>

                <div className={styles.mainSection}>
                    <div className={styles.leftSection}>
                        <h3>Chủ đề</h3>

                        <div className={styles.optionRow}>
                            <p className={styles.fieldOption}>Thời sự</p>
                            <p className={styles.fieldOption}>Góc nhìn</p>
                        </div>

                        <div className={styles.optionRow}>
                            <p className={styles.fieldOption}>Thế giới</p>
                            <p className={styles.fieldOption}>Kinh doanh</p>
                        </div>

                        <div className={styles.optionRow}>
                            <p className={styles.fieldOption}>Du lịch</p>
                        </div>


                    </div>
                    <div className={styles.rightSection}>
                        <h2>Nội dung đã lưu</h2>
                        {
                            listNews.length!=0 && listNews.map((item,index)=> <ItemSearch key={index} 
                                data={item} op1 ={index+1!==listNews.length?1:0}/>)
                        }

                    </div>


                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default ViewLater
