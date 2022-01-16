

import styles from "./CSS/AdminLogin.module.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axiosConfig from '../config/axiosConfig';
import Cookies from 'js-cookie';

function AdminLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const adminLogin = () => {
        axiosConfig.post('/admin/auth/signin', {
            username: username,
            password: password,
        }).then(res => {
            Cookies.set('access_token_admin', res.data.data.accessToken,{expires: 1, sameSite:'Strict', path:'/'});
            console.log(res.data.data.accessToken);
            navigate('/admin');
        }).catch((err) => {
            console.log(err);
        })
    };

    // useEffect(()=>{
    //     const admin_token = Cookies.get('access_token_admin')
    //     if(admin_token !== undefined){
    //         axiosConfig.post('/auth/signin', {
    //             username: username,
    //             password: password,
    //         })
    //         .then(res=>{
    //             if(res.data.data.accessToken === admin_token){
    //                 navigate('/admin');
    //             }
    //         })
    //         .catch(err=>{
    //             console.log(err);

    //         })
            
    //     }

    // },[])




    return (
        <div className={`${styles.loginWrap} ${styles.body}`}>
            <div className={styles.loginHtml}>
                <input id="tab-1" type="radio" name="tab" className={styles.signIn} checked /><label for="tab-1" className={styles.tab}>Sign In</label>
                <div className={styles.loginForm}>
                    <div className={styles.signInHtm}>
                        <div className={styles.group}>
                            <label for="user" className={styles.label}>Username</label>
                            <input id="user" type="text" className={styles.input} onChange={ e=> setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.group}>
                            <label for="pass" className={styles.label}>Password</label>
                            <input id="pass" type="password" className={styles.input} data-type="password" onChange={ e=> setPassword(e.target.value)} />
                        </div>
                        <div className={styles.group}>
                            <input id="check" type="checkbox" className={styles.check} checked />
                        </div>
                        <div className={styles.group}>
                            <input type="submit" className={styles.button} value="Sign In" onClick={adminLogin}/>
                        </div>
                        <div className={styles.hr}></div>
                        <div className={styles.footLnk}>
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default AdminLogin