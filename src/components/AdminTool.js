import { Link } from 'react-router-dom'
import styles from './CSS/AdminTool.module.css'
function AdminTool(){
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

                <Link to='/admin/manager-post' className={styles.hyperLink}>
                    <div className={styles.opManagePost}>
                        <p className={styles.textInfo}>Quản lý bài viết</p>
                    </div>
                </Link>

            </div>
        </div>

    )
}
export default AdminTool