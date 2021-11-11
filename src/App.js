import React from "react";
import Home from "./screens/Home";
import Login_Register from "./screens/Login_Register";
import GOCNHIN from "./screens/GocNhin";

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (

        <
        BrowserRouter >
        <
        div className = "App" >

        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route> <
        Route path = "/login" >
        <
        Login_Register / >
        <
        /Route>

        <
        Route path = "/goc-nhin" >
        <
        GOCNHIN / >
        <
        /Route> < /
        Switch >

        <
        /div> < /
        BrowserRouter >

    );
}

export default App;