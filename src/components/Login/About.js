import React from "react";
import { useState } from "react";
import { Routes, Route, Link , useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./CSS/about.module.css";

function About() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  let navigate = useNavigate();

  const login = () => {
    axios.post('http://localhost:9091/api/auth/signin',{
      username: username,
      password: password,
    }).then(res => {
      console.log(res.data);
      navigate('/');
    }).catch((err) => {
      console.log(err);
    })
  };
  const signup = () => {
    axios.post('http://localhost:9091/api/auth/signup',{
      username: username,
      password: password,
      email: email,
      address: address
    }).then(res => {
      console.log(res.data);
      navigate('/login');
      alert('Register successfully!');
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className={styles.loginWrap}>
        <div className={styles.loginHtml}>
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className={styles.signIn}
            checked
          />
          <label for="tab-1" className={styles.tab}>
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className={styles.signUp} />
          <label for="tab-2" className={styles.tab}>
            Sign Up
          </label>
          <div className={styles.loginForm}>
            <div className={styles.signInHtm}>
              <div className={styles.group}>
                <label for="user" className={styles.label}>
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className={styles.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <input
                  id="check"
                  type="checkbox"
                  className={styles.check}
                  checked
                />
                <label for="check">
                  <span className={styles.icon}></span> Keep me Signed in
                </label>
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Sign In"
                  onClick={login}
                />
              </div>
              <div className={styles.hr}></div>
              <div className={styles.footLnk}>
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className={styles.signUpHtm}>
              <div className={styles.group}>
                <label for="user" className={styles.label}>
                  Username
                </label>
                <input 
                  id="user" 
                  type="text" 
                  className={styles.input} 
                  placeholder="VD: tuannha123"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
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
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <label for="pass" className={styles.label}>
                  Email
                </label>
                <input 
                  id="pass" 
                  type="text" 
                  className={styles.input} 
                  placeholder="VD: tuannha1122@gmail.com"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <label for="pass" className={styles.label}>
                  Address
                </label>
                <input 
                  id="pass" 
                  type="text" 
                  className={styles.input} 
                  placeholder="VD: Ha Noi"
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Sign Up"
                  onClick={signup}
                />
              </div>
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
              <div className={styles.hr}></div>
              <div className={styles.footLnk}>
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
