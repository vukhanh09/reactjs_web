import Header from '../components/header_footer/Header';
import Footer from '../components/header_footer/Footer';
import Dulich from '../components/DuLich/Dulich';
function KinhDoanh() {
  return (

    <div className="Gocnhin">
      <Header/>
      <Dulich topic={'Kinh doanh'}/>
      <Footer/>
      
    </div>
  );
}

export default KinhDoanh;
