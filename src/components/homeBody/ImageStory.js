
import styles from './CSS/ImageStory.module.css'
import clsx from "clsx";

function ImageStory({data,op1,op2}){
    const classes = clsx({
        [styles.container_border]:op1,
        [styles.container_no_border] :op2,
    })

    return(
        <div className={classes} href={`/view-post/${data?.url}`}>
            <div className={styles.col_1}>
                <img src={data?.url_image[0]} className={styles.image} href={`/view-post/${data?.url}`}/>
            </div>
            <div className={styles.col_2}>
                <h3 className={styles.title}><a href={`/view-post/${data?.url}`}>{data?.title}</a></h3>
                <p className={styles.description}>{data?.description}</p>
            </div>

        </div>
    )
}

export default ImageStory