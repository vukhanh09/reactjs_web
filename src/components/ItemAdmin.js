
import styles from './CSS/ItemAdmin.module.css'
function ItemAdmin({title,url}){
    return (
        <div className={styles.container}>
            <img src={url} className={styles.image} alt='search'/>
            <div className={styles.component}>
                <p className={styles.title}>{title}</p>
                <div className={styles.optionArea}>
                    <p className={styles.option}>Chi tiết</p>
                    <p className={styles.option}>Xóa</p>
                </div>


            </div>
        </div>
    )
}

export default ItemAdmin