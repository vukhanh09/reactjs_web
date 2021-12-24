import { Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Gocnhin from "../screens/GocNhin";
import ABout from "../screens/About";
import TimKiem from "../screens/TimKiem";
import UserInformation from "../screens/UserInformation";
import SectionComment from "../components/SectionComment";
import ViewPost from "../screens/ViewPost";
import ViewLater from "../screens/ViewLater";

function RootRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<ABout />} /> 
            <Route path="/goc-nhin" element={<Gocnhin />} /> 
            <Route path="/tim-kiem" element={<TimKiem />} />
            <Route path="/user-information" element={<UserInformation />} />
            <Route path="/comment" element={<SectionComment />} />
            <Route path="/view-post" element={<ViewPost />} >
                <Route path=":postId" element={<ViewPost />} />
            </Route>
            <Route path="/view-later" element={<ViewLater />} />

      </Routes>
    )
}


export default RootRoutes