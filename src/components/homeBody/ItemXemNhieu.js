import styles from './CSS/ItemXemNhieu.module.css'
function ItemXemNhieu({title,src,top}){
    return (
        <div className={styles.ItemXemNhieu}>
            <h1>
                {top}
            </h1>
            <h3 className={styles.title}>
                {title}
            </h3>

        </div>
    )
}

export default ItemXemNhieu