import React from "react";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import styles from './CSS/UserInformation.module.css'
import UserDisplay from "../components/userDisplay";
import AccountInformation from "../components/AccountInformation";
function UserInformation(){
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.content}>
                <UserDisplay user_url='//a.vnecdn.net/avatar/tmp/2021/12/10/6037330351_1639147755.jpg' 
                    user_name='Khánh Vũ'
                    user_age ={22}
                />
                <AccountInformation/>

            </div>
            <Footer/>
        </div>
    )

}
export default UserInformation