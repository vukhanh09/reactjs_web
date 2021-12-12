import React from "react";
import styles from './CSS/UserDisplay.module.css'
function UserDisplay(props){
    const user_url = props.user_url
    const user_name = props.user_name
    const user_age = props.user_age
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Tài khoản của tôi</h2>
            <div className={styles.content}>
                <div className={styles.left_cpn}>
                    <img src={user_url} className={styles.user_avatar} />
                </div>
                <div className={styles.right_cpn}>
                    <h3>{user_name}</h3>
                    <p>{user_age} tuổi</p>
                </div>
            </div>

        </div>
    )

}
export default UserDisplay