import Header from '../components/header_footer/Header';
import Footer from '../components/header_footer/Footer';
import SearchView from '../components/searchView';
import FormSearch from '../components/formSearch';
import react, {useState,useEffect} from "react"

import styles from './CSS/TimKiem.module.css'
import clsx from "clsx"
import ItemSearch from "../components/ItemSearch";
import {middleData} from '../components/homeBody/data.js'
import axiosConfig from '../config/axiosConfig';


function TimKiem(){

    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState([]);

    const handleInput = (e)=>{
        setSearchInput(e.target.value)
    }

    const handleSearch = (condition)=>{
        if(condition){
            const url = '/search/searchByTitle'
            axiosConfig.post(url, {
                q: searchInput,
              })
              .then(function (response) {
                setData(response.data.data)
              })
              .catch(function (error) {
                console.log(error);
              });
            // setData(res)
        }
    }    

    return (
        <div className={styles.TimKiem}>
            <Header/>
            <div className={styles.container}>

                <SearchView handleInput={handleInput} searchInput={searchInput} handleSearch={handleSearch} />

                <div className={styles.mainSection}>
                    
                    <div className={styles.leftSection}>
                        <FormSearch/>
                    </div>
                    <div className={styles.rightSection}>
                        <h2>Kết quả tìm kiếm</h2>
                        {
                            data.length!=0 && data.map((item,index)=> <ItemSearch key={index} 
                                data={item} op1 ={index+1!==data.length?1:0}/>)
                        }
                    </div>

                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default TimKiem
