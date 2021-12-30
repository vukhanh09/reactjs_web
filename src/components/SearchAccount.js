import styles from './CSS/SearchAccount.module.css'

function SearchAccount(){

    return (
        <div className={styles.container}>
            <div className={styles.fieldSearch}>
                <label>Username</label>
                <input type='text'/>
            </div>
            <div className={styles.fieldSearch}>
                <label>Full name</label>
                <input type='text'/>
            </div>

            <button className={styles.searchBtn}>Tìm kiếm</button>

        </div>

    )

}
export default SearchAccount