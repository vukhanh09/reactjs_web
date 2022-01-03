
import styles from './CSS/ItemAdmin.module.css'
import { Link } from 'react-router-dom'
function ItemAdmin({title,url}){
    
    return (
        <div className={styles.container}>
            <img src={url} className={styles.image} alt='search'/>
            <div className={styles.component}>
                <p className={styles.title}>{title}</p>
                <div className={styles.optionArea}>
                    <Link to = '/admin/view-post/hello' className={styles.linkPost}>
                        <p className={styles.option}>Chi tiết</p>
                    </Link>
                    <p className={styles.option}>Xóa</p>
                </div>
            </div>
        </div>
    )
}

export default ItemAdmin