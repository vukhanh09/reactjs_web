
import styles from './CSS/SubTopic.module.css'
import clsx from 'clsx'
function SubTopic({data,op}){
    const classes = clsx({
        [styles.container_1]:op,
        [styles.container_2] :!op
    })
    return (
        <div className={classes}>
            <img src={data.url} className={styles.image} alt='search'/>
            <p className={styles.title}>{data.title}</p>
        </div>
    )
}

export default SubTopic