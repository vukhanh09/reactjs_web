import React from "react";
import styles from './CSS/UserDisplay.module.css'
import clsx from "clsx";



function UserDisplay(props){
    const user_url = props.user_url
    const user_name = props.user_name
    const user_age = props.user_age


    const displayUpdate = (id)=>{
        const res = document.getElementById(id)
        if (res.style.display === 'flex'){
            res.style.display = 'none'
        }
        else{
            res.style.display = 'flex'
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Tài khoản của tôi</h2>
            <div className={styles.content}>
                <div className={styles.left_cpn}>
                    <img src={user_url} className={styles.user_avatar} />

                    <div className={styles.changeAvatar}>

                        <label className={styles.replaceInfor}
                                onClick={()=>displayUpdate(1)}
                            >Thay đổi</label>

                        <div className={styles.update} id={1}>
                            <input class="form-control" type="file" id="formFile" name="formFile"/>
                            <lable className={styles.replaceInfor}>Lưu thay đổi</lable>
                        </div>
                    </div>

                </div>
                <div className={styles.right_cpn}>
                    <h3>{user_name}</h3>
                    <p>{user_age}</p>
                </div>
            </div>



        </div>
    )

}
export default UserDisplay