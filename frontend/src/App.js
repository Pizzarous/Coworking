import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import QuoteScreen from './screens/QuoteScreen/QuoteScreen';
import VisitScreen from './screens/VisitScreen/VisitScreen';
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
        {/* <BrowserRouter> */}
        <HashRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<ContactUS />} />
            <Route path='/bookingVisit' element={<VisitScreen />} />
            <Route path='/quote' element={<QuoteScreen />} />
          </Routes>
        </HashRouter>
        {/* </BrowserRouter> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;