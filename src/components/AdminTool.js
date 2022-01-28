import { Link, useNavigate } from 'react-router-dom'
import styles from './CSS/AdminTool.module.css'
import Cookies from 'js-cookie'
function AdminTool(){
    const navigator = useNavigate()

    const hanldLogOut = () => {
        Cookies.remove('access_token_admin')
        alert('Đăng xuất thành công!')
        navigator('/admin/login')
    }

    return (
        <div className={styles.container}>
            <h2>Time News</h2>
            <div className={styles.AreaTool}>

                <Link to='/admin' className={styles.hyperLink}>
                    <div className={styles.opGeneral}>
                        <p className={styles.textInfo}>Chung</p>
                    </div>
                </Link>

                <Link to='/admin/manager-account' className={styles.hyperLink}>
                    <div className={styles.opManageAcc}>
                        <p className={styles.textInfo}>Quản lý tài khoản</p>
                    </div>
                </Link>

                <Link to='/admin/add-post' className={styles.hyperLink}>
                    <div className={styles.opAddPost}>
                        <p className={styles.textInfo}>Thêm bài viết</p>
                    </div>
                </Link>

                <Link to='/admin/manager-post' className={styles.hyperLink}>
                    <div className={styles.opManagePost}>
                        <p className={styles.textInfo}>Quản lý bài viết</p>
                    </div>
                </Link>

                <div className={styles.onLogOut} onClick={hanldLogOut}>
                    <p className={styles.textInfo}>Đăng xuất</p>
                </div>

            </div>
        </div>

    )
}
export default AdminTool