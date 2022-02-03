import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import GamesScreen from './screens/GamesScreen/GamesScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';



function App() {

  return (
    <div>
      <Header />
      <div className='structure'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/games' element={<GamesScreen />} />


          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;