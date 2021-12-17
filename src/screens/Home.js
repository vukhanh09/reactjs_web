import Header from '../components/header_footer/Header';
import Footer from '../components/header_footer/Footer';
import BodyHome from '../components/homeBody/BodyHome';
function Home({navigation}) {
  return (
    <div className="Home">
      <Header navigation={navigation}/>
      <BodyHome navigation={navigation}/>
      <Footer navigation={navigation}/>
      
    </div>
  );
}

export default Home;
