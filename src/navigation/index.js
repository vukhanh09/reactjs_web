import { Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Gocnhin from "../screens/GocNhin";
import Login from "../screens/Login";
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
import KinhDoanh from "../screens/KinhDoanh";
import TheGioi from "../screens/TheGioi";
import ThoiSu from "../screens/ThoiSu";
import UploadFile from "../screens/UploadFile";
import SignUp from "../screens/signup";

function RootRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/upload-file" element={<UploadFile />} /> 
            
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/goc-nhin" element={<Gocnhin />} /> 
            <Route path="/du-lich" element={<Dulich />} />
            <Route path="/tim-kiem" element={<TimKiem />} />
            <Route path="/the-gioi" element={<TheGioi />} />
            <Route path="/kinh-doanh" element={<KinhDoanh />} />
            <Route path="/thoi-su" element={<ThoiSu />} />

            <Route path="/user-information" element={<UserInformation />} />
            <Route path="/comment" element={<SectionComment />} />
            <Route path="/view-post" element={<ViewPost />} >
                <Route path=":postId" element={<ViewPost />} />
            </Route>
            
            <Route path="/xem-sau" element={<ViewLater />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="/admin/manager-account" element={<ManageAcc />} />
            <Route path="/admin/manager-post" element={<ManagePost />} />
            <Route path="/admin/add-post" element={<AddPost />} />

            <Route path="/admin/view-post/:postId" element={<AdminViewPost />} />


      </Routes>
    )
}


export default RootRoutes