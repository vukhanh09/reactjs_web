import { Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Gocnhin from "../screens/GocNhin";
import ABout from "../screens/About";
import TimKiem from "../screens/TimKiem";
import UserInformation from "../screens/UserInformation";

function RootRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<ABout />} /> 
            <Route path="/goc-nhin" element={<Gocnhin />} /> 
            <Route path="/tim-kiem" element={<TimKiem />} />
            <Route path="/user-information" element={<UserInformation />} />

      </Routes>
    )
}


export default RootRoutes