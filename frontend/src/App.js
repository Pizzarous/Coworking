import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import AboutUs from './screens/AboutUs/AboutUS';
import ContactUS from './screens/ContactUs/ContactUS';



function App() {

  return (
    <div>
      <Header />
      <div className='structure'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUS />} />

            <Route path='/register' element={<RegisterScreen />} />

          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;