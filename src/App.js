import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Navigation from './components/Navigation';
import { BrowserRouter,  Route, Routes ,useLocation,useNavigate  } from 'react-router-dom';
import Tutorial from './Tutorial';
import AboutUs from './AboutUs';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
      <Routes>
        <Route element={<Product/>} path="/">
        </Route>
        <Route element={<Tutorial/>} path="/tutorial">
        </Route>
        <Route element={<AboutUs/>} path="/about-us">
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
