import { Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import GocNhin from "../screens/GocNhin";

function RootRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<About />} /> 
            <Route path="/goc-nhin" element={<GocNhin />} /> 
      </Routes>
    )
}
export default RootRoutes