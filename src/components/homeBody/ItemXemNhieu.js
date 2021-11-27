import styles from './CSS/ItemXemNhieu.module.css'
import clsx from 'clsx'
function ItemXemNhieu({title,src,top,op}){
    const classes = clsx({
        [styles.border_bottom]:op
    })
    return (
        <div className={clsx(styles.ItemXemNhieu,classes)}>
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