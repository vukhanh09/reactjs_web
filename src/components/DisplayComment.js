import styles from "./CSS/DisplayComment.module.css"

function DisplayComment(props){
    const user_name = props.user_name
    const timestamp = props.timestamp
    const user_comment = props.user_comment
    return (
        <div className={styles.container}>
            <div className={styles.leftElement}>
                <div className={styles.userElement}> 
                    <img src='//a.vnecdn.net/avatar/tmp/2021/12/10/6037330351_1639147755.jpg' className={styles.userAvatar}/>
                    <h3 className={styles.userName}>{user_name}</h3>
                </div>
                <p>{timestamp}</p>

            </div>

            <div className={styles.innerDiv}>

            </div>

            <div className={styles.rightElement}>
                <p className={styles.userComment}>{user_comment}</p>
            </div>


        </div>
    )

}
export default DisplayComment