
import styles from './CSS/SubTopic.module.css'
import clsx from 'clsx'
function SubTopic({data,op}){
    const classes = clsx({
        [styles.container_1]:op,
        [styles.container_2] :!op
    })
    return (
        <div className={classes}>
            <a href={`/view-post/${data?.url}`}>
                <img src={data?.url_image[0]} className={styles.image} alt='search'/>
                <p className={styles.title}>{data?.title}</p>
            </a>
        </div>
    )
}

export default SubTopic