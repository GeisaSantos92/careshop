import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';
import { NavbarNav } from './components/Navbar';
import { Footer } from './components/Footer';
import { ShopContextProvider } from './context/shop-context';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';



function App() {
  return (
    <div >
      <ShopContextProvider>
        <Router>
          <NavbarNav/>
          <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/catalog' element={ <Shop/>} /> 
            <Route path='cart' element={<Cart/>} />    
            <Route path='about' element={<About/>} />    
            <Route path='contact' element={<Contact/>} />      
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
   </div>

  );
}

export default App;
