

import styles from "./CSS/AdminLogin.module.css"
function AdminLogin(){

    return (
        <div className={`${styles.loginWrap} ${styles.body}`}>
            <div className={styles.loginHtml}>
                <input id="tab-1" type="radio" name="tab" className={styles.signIn} checked /><label for="tab-1" className={styles.tab}>Sign In</label>
                <div className={styles.loginForm}>
                    <div className={styles.signInHtm}>
                        <div className={styles.group}>
                            <label for="user" className={styles.label}>Username</label>
                            <input id="user" type="text" className={styles.input}/>
                        </div>
                        <div className={styles.group}>
                            <label for="pass" className={styles.label}>Password</label>
                            <input id="pass" type="password" className={styles.input} data-type="password" />
                        </div>
                        <div className={styles.group}>
                            <input id="check" type="checkbox" className={styles.check} checked />
                        </div>
                        <div className={styles.group}>
                            <input type="submit" className={styles.button} value="Sign In" />
                        </div>
                        <div className={styles.hr}></div>
                        <div className={styles.footLnk}>
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default AdminLogin