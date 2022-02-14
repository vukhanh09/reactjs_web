import styles from "./CSS/DisplayComment.module.css"

function DisplayComment(props){
    const user_name = props.user_name
    const timestamp = props.timestamp
    const user_comment = props.user_comment
    const user_avt = props.user_avt
    return (
        <div className={styles.container}>
            <div className={styles.comment_thread}>
                <div className={styles.comment_heading}>
                    <div className={styles.comment_info}>
                        <a href="#" className={styles.comment_author}>
                            <img src={user_avt} className={styles.userAvatar}/>
                            {user_name}
                        </a>
                        <p className={styles.m_0}>
                            {timestamp}
                        </p>
                    </div>
                </div>
                
                <div className={styles.comment_body}>
                    <p>
                        {user_comment}
                    </p>
                    <button type="button" className={styles.button}>Reply</button>
                </div>
            </div>

        </div>
    )

}
export default DisplayComment