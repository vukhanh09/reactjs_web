
import AdminTool from "../components/AdminTool"
import styles from "./CSS/Admin.module.css"
import XemNhieu from "../components/homeBody/XemNhieu"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Admin(){
    const peopleOnl = 5;
    const numPost = 10;
    const navigate = useNavigate();
    console.log("token",Cookies.get("access_token_admin"));
    if(typeof Cookies.get("access_token_admin") === undefined){
        navigate("/login-admin");
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftElement}>
                <AdminTool/>
            </div>
            <div className={styles.inner}></div>
            <div className={styles.rightElement}>
                <h3>Admin</h3>
                <div className={styles.firstRow}>
                    <p className={styles.firstInfo}>Số người dùng truy cập: {peopleOnl} người</p>
                    <p className={styles.firstInfo}>Số bài viết trong ngày: {numPost} bài</p>
                </div>
                <div className={styles.topDailyView}>
                    <XemNhieu/>

                </div>
            </div>

        </div>
    )
}
export default Admin