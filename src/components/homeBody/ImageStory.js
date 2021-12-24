
import styles from './CSS/ImageStory.module.css'
import clsx from "clsx";

function ImageStory({data,op1,op2}){
    const classes = clsx({
        [styles.container_border]:op1,
        [styles.container_no_border] :op2,
    })
    var url_post = data.title.split(' ')
    url_post = url_post.join('-')

    return(
        <div className={classes} href={`/view-post/${url_post}`}>
            <div className={styles.col_1}>
                <img src={data.src} className={styles.image} href={`/view-post/${url_post}`}/>
            </div>
            <div className={styles.col_2}>
                <h3 className={styles.title}><a href={`/view-post/${url_post}`}>{data.title}</a></h3>
                <p className={styles.description}>{data.description}</p>
            </div>

        </div>
    )
}

export default ImageStory