import Header from '../components/header_footer/Header';
import Footer from '../components/header_footer/Footer';
import SearchView from '../components/TimKiem/searchView';
import FormSearch from '../components/TimKiem/formSearch';

function TimKiem(){
    return (
        <div className="TimKiem">
            <Header/>
            <h2>Tìm kiếm</h2>
            <SearchView/>
            <FormSearch/>
            <Footer/>
            
        </div>
    )
}

export default TimKiem