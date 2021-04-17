import './App.css';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel';
import CoreBusiness from './Components/CoreBusiness/CoreBusiness';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Notice from './Components/Notice/Notice';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <About/>
      <CoreBusiness/>
      <Notice/>
      <Footer/>
    </div>
  );
}

export default App;
