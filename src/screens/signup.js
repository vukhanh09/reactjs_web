import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styles from "./CSS/login.module.css";
import Cookies from "js-cookie";
import { loginUser, registration } from "../api/authApi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

  const [usernameRes, setUsernameRes] = useState("");
  const [email, setEmail] = useState("");
  const [passwordRes, setPasswordRes] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  let navigate = useNavigate();

  const register = () => {
    registration({
      username: usernameRes,
      email: email,
      password: passwordRes,
      address: "Việt Nam",
      dateOfBirth: dateOfBirth,
    })
      .then((res) => {
          console.log(res)
        if (res.code === 201) {
          console.log("sign up successfully!");
          toast.success('Đăng kí tài khoản thành công!',{theme: "colored" })
          setUsernameRes('')
          setEmail('')
          setPasswordRes('')
          setDateOfBirth('')

          setTimeout(() => {
            navigate('/login')
        }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
      <div className={`${styles.loginWrap} ${styles.body}`}>
        <div className={styles.loginHtml}>
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className={styles.signIn}
          />
          <label for="tab-1" className={styles.tab} onClick={()=>navigate("/login")}>
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className={styles.signUp} checked/>
          <label for="tab-2" className={styles.tab}>
            Sign Up
          </label>
          <div className={styles.loginForm}>           
            <div className={styles.signUpHtm}>
              <div className={styles.group}>
                <label for="user" className={styles.label}>
                  UserName
                </label>
                <input
                  id="user"
                  type="text"
                  className={styles.input}
                  value={usernameRes}
                  onChange={(e) => setUsernameRes(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <label for="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="text"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <label for="pass" className={styles.label}>
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                  value={passwordRes}
                  onChange={(e) => setPasswordRes(e.target.value)}
                />
                <label>incorrect</label>
              </div>
              <div className={styles.group}>
                <label for="date" className={styles.label}>
                  Birth Date
                </label>
                <input
                  id="date"
                  type="date"
                  className={styles.input}
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Sign Up"
                  onClick={register}
                />
              </div>
              <div className={styles.divgroup}>
                <div className={styles.group}>
                  <a href="" className={styles.social_log_gg}>
                    <img
                      src="https://www.pinclipart.com/picdir/big/28-288931_google-plus-logo-icon-vector-google-icon-png.png"
                      alt=""
                      width="25px"
                    />
                    <span className={styles.imgGoogle}>Google</span>
                  </a>
                </div>
                <div className={styles.group}>
                  <a href="" className={styles.social_log_fb}>
                    <img
                      src="https://1.bp.blogspot.com/-yzvoDfOGEWI/XE9Ci5LowiI/AAAAAAAAHcI/EfvaSOaVpOsRUfoY5WgwYbQkamlPTU9LQCK4BGAYYCw/s1600/icon-facebook.png"
                      alt=""
                      width="15px"
                      height="18px"
                    />
                    <span className={styles.imgFb}>Facebook</span>
                  </a>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.footLnk}>
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </div>
  );
}

export default SignUp;
