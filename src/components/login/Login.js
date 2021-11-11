import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';

function Login() {
    return ( <
        div className = "login-wrap" >
        <
        div className = "login-html" >
        <
        input id = "tab-1"
        type = "radio"
        name = "tab"
        className = "sign-in"
        checked / > < label
        for = "tab-1"
        className = "tab" > Sign In < /label> <
        input id = "tab-2"
        type = "radio"
        name = "tab"
        className = "sign-up" / > < label
        for = "tab-2"
        className = "tab" > Sign Up < /label> <
        div className = "login-form" >
        <
        div className = "sign-in-htm" >
        <
        div className = "group" >
        <
        label
        for = "user"
        className = "label" > Username < /label> <
        input id = "user"
        type = "text"
        className = "input" / >
        <
        /div> <
        div className = "group" >
        <
        label
        for = "pass"
        className = "label" > Password < /label> <
        input id = "pass"
        type = "password"
        className = "input" /
        >
        <
        /div> <
        div className = "group" >
        <
        input id = "check"
        type = "checkbox"
        className = "check"
        checked / >
        <
        label
        for = "check" > < span className = "icon" > < /span> Keep me Signed in</label >
        <
        /div> <
        div className = "group" >
        <
        input type = "submit"
        className = "button"
        value = "Sign In" / >
        <
        /div> <
        div className = "hr" > < /div> <
        div className = "foot-lnk" >
        <
        a href = "#forgot" > Forgot Password ? < /a> < /
        div > <
        /div> <
        div className = "sign-up-htm" >

        <
        div className = "group" >
        <
        label
        for = "user"
        className = "label" > Username < /label> <
        input id = "user"
        type = "text"
        className = "input" / >
        <
        /div> <
        div className = "group" >
        <
        label
        for = "pass"
        className = "label" > Password < /label> <
        input id = "pass"
        type = "password"
        className = "input" /
        >
        <
        /div> <
        div className = "group" >
        <
        label
        for = "pass"
        className = "label" > Email Address < /label> <
        input id = "pass"
        type = "text"
        className = "input" / >
        <
        /div> <
        div className = "group" >
        <
        input type = "submit"
        className = "button"
        value = "Sign Up" / >
        <
        /div> <
        div className = "group" >
        <
        a href = "#"
        className = " social_log_gg" >
        <
        img src = "https://www.pinclipart.com/picdir/big/28-288931_google-plus-logo-icon-vector-google-icon-png.png"
        alt = ""
        width = "25px" /
        >
        <
        span className = "img-google" > Google < /span>< /
        a > <
        /div> <
        div className = "group" >
        <
        a href = "#"
        className = " social_log_fb " >
        <
        img src = "https://1.bp.blogspot.com/-yzvoDfOGEWI/XE9Ci5LowiI/AAAAAAAAHcI/EfvaSOaVpOsRUfoY5WgwYbQkamlPTU9LQCK4BGAYYCw/s1600/icon-facebook.png"
        alt = ""
        width = "15px"
        height = "18px" / > < span className = "img-fb" > Facebook < /span> < /
        a > <
        /div> <
        div className = "hr" > < /div> <
        div className = "foot-lnk" >
        <
        label
        for = "tab-1" > Already Member ? < /label> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div >
    );
}

export default Login;