import { Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Gocnhin from "../screens/GocNhin";
import ABout from "../screens/About";
import TimKiem from "../screens/TimKiem";

function RootRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<ABout />} /> 
            <Route path="/goc-nhin" element={<Gocnhin />} /> 
            <Route path="/tim-kiem" element={<TimKiem />} />

      </Routes>
    )
}


export default RootRoutes