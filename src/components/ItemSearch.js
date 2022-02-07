

import styles from './CSS/ItemSearch.module.css'
import clsx from "clsx";
import rmImg from "../assets/remove.png"
import { removeNewsFromWatchLater } from '../api/watchLaterApi';
import Cookies from 'js-cookie';

function ItemSearch({data,op1,isViewLater = 0}){
    const classes = clsx({
        [styles.container_border]:op1,
        [styles.container_no_border] :!op1,
    })

    const removeFromWatchLater = () => {
        isViewLater = 0;
        removeNewsFromWatchLater(Cookies.get("access_token"), data?.news_id)
        .then(res => {
            console.log(res)
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className={classes}>
            <div className={styles.col_1}>
                <img src={data.url_image[0]} className={styles.image} />
            </div>
            <div className={styles.col_2}>
                {
                    isViewLater === 0 && <h3 className={styles.title}><a href={`/view-post/${data?.url}`}>{data.title}</a></h3>
                }
                {
                    isViewLater === 1 && 
                    <div className={styles.utilElement}>
                        <h3 className={styles.title}><a href={`/view-post/${data?.url}`}>{data.title}</a></h3>
                        <img src={rmImg} className={styles.rmButton} onClick={removeFromWatchLater}/>
                    </div>

                }
                <p className={styles.description}>{data.description}</p>
            </div>
        </div>
    )
}

export default ItemSearch