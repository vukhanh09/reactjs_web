
import styles from './CSS/SubTopic.module.css'
import clsx from 'clsx'
function SubTopic({data,op}){
    const classes = clsx({
        [styles.container_1]:op,
        [styles.container_2] :!op
    })
    var url_post = data.title.split(' ')
    url_post = url_post.join('-')
    return (
        <div className={classes}>
            <a href={`/view-post/${url_post}`}>
                <img src={data.url} className={styles.image} alt='search'/>
                <p className={styles.title}>{data.title}</p>
            </a>
        </div>
    )
}

export default SubTopic