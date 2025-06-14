import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/Header";
import Footer from './Component/Footer';
import MainPage from './MainPage/MainPage';
import Login from './Login/login';
import Signup from './Login/signup';
import ListPage from './ListPage/ListPage';
import AddCarPage from './AddCarPage/AddCarPage';
import CarSellPage from './CarSellPage/CarSellPage';
import CarInfoPage from './CarInfoPage/CarInfoPage';
import RedirectPage from './Component/RedirectPage';
import MyPage from './MyPage/MyPage';
import './App.css';
//import MyCarListTest from './Component/MyCarListTest';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/list' element={<ListPage />} />
          <Route path="/addcar" element={<AddCarPage />} />
          <Route path="/sell" element={<CarSellPage />} />
          <Route path="/carinfo" element={<CarInfoPage />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="/mypage" element={<MyPage />} />
          {/* <Route path="/test" element={<MyCarListTest />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;