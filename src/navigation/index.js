import { Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Gocnhin from "../screens/GocNhin";
import ABout from "../screens/About";
import Dulich from "../screens/DuLich";
import TimKiem from "../screens/TimKiem";
import UserInformation from "../screens/UserInformation";
import SectionComment from "../components/SectionComment";
import ViewPost from "../screens/ViewPost";
import ViewLater from "../screens/ViewLater";
import AdminLogin from "../screens/AdminLogin";
import Admin from "../screens/Admin";
import ManageAcc from "../screens/ManageAcc";
import ManagePost from "../screens/ManagePost";
import AddPost from "../screens/AddPost";
import AdminViewPost from "../components/AdminViewPost";

function RootRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<ABout />} /> 
            <Route path="/goc-nhin" element={<Gocnhin />} /> 
            <Route path="/du-lich" element={<Dulich />} />
            <Route path="/tim-kiem" element={<TimKiem />} />
            <Route path="/user-information" element={<UserInformation />} />
            <Route path="/comment" element={<SectionComment />} />
            <Route path="/view-post" element={<ViewPost />} >
                <Route path=":postId" element={<ViewPost />} />
            </Route>
            <Route path="/xem-sau" element={<ViewLater />} />

            <Route path="/login-admin" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/manager-account" element={<ManageAcc />} />
            <Route path="/admin/manager-post" element={<ManagePost />} />
            <Route path="/admin/add-post" element={<AddPost />} />
            <Route path="/admin/view-post" element={<AdminViewPost />} >
                <Route path=":postId" element={<ViewPost />} />
            </Route>


      </Routes>
    )
}


export default RootRoutes