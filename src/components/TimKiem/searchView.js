import react, {useState} from "react"
import searchImage from '../../assets/magnifier_black.png'
import styles from './CSS/searchView.module.css'

function SearchView(){
    const [searchInput, setSearchInput] = useState('');
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder={'Nhập thông tin tìm kiếm....'}
                value={searchInput}
                onChange={e=>setSearchInput(e.target.value)}
            />
            <img src={searchImage} className={styles.image}/>

        </div>
    )

}
export default SearchView