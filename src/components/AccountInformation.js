import React from "react";
import styles from './CSS/AccountInformation.module.css'
import clsx from "clsx";

function AccountInformation(props){
    const user = props.user;
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
            <h2>Thông tin tài khoản</h2>
            <div className={styles.content}>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Tài khoản</label>
                        <label className={styles.midColumn}>{user?.username}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(0)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={0}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)} onClick={()=> {console.log("aaa")}}>Lưu thay đổi</lable>
                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Mật khẩu</label>
                        <input type="password" disabled="disabled" value={user?.password}  className={styles.midColumn}/>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(1)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={1}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...' type='password'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Họ và tên</label>
                        <label className={styles.midColumn}>{user?.nick_name}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(2)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={2}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.infor}>
                        <label className={styles.column}>Email</label>
                        <label className={styles.midColumn}>{user?.email}</label>
                        <label className={clsx(styles.lastColumn,styles.replaceInfor)}
                            onClick={()=>displayUpdate(3)}
                        >Thay đổi</label>
                    </div>
                    <div className={styles.update} id={3}>
                        <lable className={styles.column}>
                            Cập nhật thông tin
                        </lable>
                        <input placeholder='Nhập thông tin...'
                            className={clsx(styles.midColumn,styles.inputUpdate)}
                        />
                        <lable className={clsx(styles.lastColumn,styles.replaceInfor)}>Lưu thay đổi</lable>


                    </div>
                </div>
            </div>

            
        </div>
    )

}
export default AccountInformation