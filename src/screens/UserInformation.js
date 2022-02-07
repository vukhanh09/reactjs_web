
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import styles from './CSS/UserInformation.module.css'
import UserDisplay from "../components/userDisplay";
import AccountInformation from "../components/AccountInformation";
import { useEffect, useState } from "react";
import { getUserInformation } from "../api/userApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function UserInformation(){
    const [user, setUser] = useState();
    const navigator = useNavigate();
    
    useEffect(() => {
        getUserInformation(Cookies.get("access_token")).then(
            res => setUser(res.data)
        ).catch((err) => {
            console.log(err);
        })
    }, []);

    const handleLogout = () => {
        Cookies.remove('access_token');
        alert('Bạn đã đăng xuất thành công');
        navigator('/');
    }
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <UserDisplay user_url={user?.avt_url.length == 0 ? "avt_default.png" : user?.avt_url} 
                    user_name={user?.nick_name}
                    user_age ={user?.date_of_birth}
                />
                <AccountInformation user={user}/>
                
                <div className = {styles.wrapLogout}>

                    <button className = {styles.logout} onClick={handleLogout}>Đăng xuất</button>
                </div>
            </div>
            <Footer/>
        </div>
    )

}
export default UserInformation