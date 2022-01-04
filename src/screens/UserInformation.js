
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import styles from './CSS/UserInformation.module.css'
import UserDisplay from "../components/userDisplay";
import AccountInformation from "../components/AccountInformation";
import { useEffect, useState } from "react";
import axiosConfig from "../config/axiosConfig";
import Cookies from "js-cookie";
function UserInformation(){
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        axiosConfig.get('/users/get-user-info', {
            headers: {"Authorization":`Bearer ${Cookies.get("access_token")}`}
        }).then(res => {
            console.log(res.data);
            setUser(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <UserDisplay user_url='//a.vnecdn.net/avatar/tmp/2021/12/10/6037330351_1639147755.jpg' 
                    user_name={user?.nick_name}
                    user_age ={user?.date_of_birth}
                />
                <AccountInformation/>
            </div>
            <Footer/>
        </div>
    )

}
export default UserInformation