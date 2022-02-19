import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import styles from "./CSS/login.module.css";
import Cookies from "js-cookie";
import { loginUser, registration } from "../api/authApi";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameRes, setUsernameRes] = useState("");
  const [email, setEmail] = useState("");
  const [passwordRes, setPasswordRes] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  let navigate = useNavigate();
  const login = () => {
    loginUser(username, password)
      .then((res) => {
        console.log(res);
        Cookies.set("access_token", res.data.accessToken, {
          expires: 1,
          path: "/",
          sameSite: "Strict",
        });
        navigate("/");
      })
      .catch(() => {
        alert("Username or password incorrect!");
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
            checked
          />
          <label for="tab-1" className={styles.tab}>
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className={styles.signUp} />
          <label for="tab-2" className={styles.tab} onClick={()=>navigate("/signup")}>
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

          </div>
        </div>
      </div>
  );
}

export default Login;
