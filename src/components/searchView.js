import react from "react"
import searchImage from '../assets/magnifier_black.png'
import styles from './CSS/searchView.module.css'

function SearchView(props){
    const handleInput = props.handleInput
    const searchInput = props.searchInput
    const handleSearch = props.handleSearch

    const handleKeyPress = (event)=>{
        if(event.key === 'Enter'){
            handleSearch(1)
        }
    }
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                placeholder={'Nhập thông tin tìm kiếm....'}
                value={searchInput}
                onChange={e=>handleInput(e)}
                onKeyPress ={handleKeyPress}
            />
            <img src={searchImage} className={styles.image} onClick ={()=>handleSearch(1)}/>

        </div>
    )

}
export default SearchView