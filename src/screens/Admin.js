import AdminTool from "../components/AdminTool"
import styles from "./CSS/Admin.module.css"
import XemNhieu from "../components/homeBody/XemNhieu"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Admin(){
    const peopleOnl = 5;
    const numPost = 10;
    
    
    let navigate = useNavigate();
    const adminIsLogin = ()=>{
        if(!Cookies.get('access_token_admin')){
            alert('You must log in!')
            navigate('/admin/login')
        }
    }
    useEffect(()=>{
        adminIsLogin()
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.leftElement}>
                <AdminTool/>
            </div>
            <div className={styles.inner}></div>
            <div className={styles.rightElement}>
                <h3>Admin</h3>
                <div className={styles.firstRow}>
                    <p className={styles.firstInfo}>Số người dùng truy cập: {peopleOnl} người</p>
                    <p className={styles.firstInfo}>Số bài viết trong ngày: {numPost} bài</p>
                </div>
                <div className={styles.topDailyView}>
                    <XemNhieu/>

                </div>
            </div>

        </div>
    )
}
export default Admin