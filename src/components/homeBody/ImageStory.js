
import styles from './CSS/ImageStory.module.css'
import clsx from "clsx";

function ImageStory({data,op1,op2}){
    const classes = clsx({
        [styles.container_border]:op1,
        [styles.container_no_border] :op2,
    })

    return(
        <div className={classes}>
            <div className={styles.col_1}>
                <img src={data.src} className={styles.image} />
            </div>
            <div className={styles.col_2}>
                <h3 className={styles.title}><a href=''>{data.title}</a></h3>
                <p className={styles.description}>{data.description}</p>
            </div>

        </div>
    )
}

export default ImageStory