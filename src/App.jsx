import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import ProductList from './components/Productlist';
import CategoryDetail from './components/Categorydetail';
import ProductDetail from './components/Singleproduct';

import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Contact from './components/Contact';
function App() {






  return (<> <div className='mainn'>
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/Home" element={<Home/>}>Home</Route>
     <Route path="/Cart" element={<Cart/>}>Cart</Route>
     <Route path="/About" element={<About/>}>About</Route>
     <Route path="/Singleproduct" element={<ProductDetail/>}>Singleproduct</Route>
     <Route path="/Contact" element={<Contact/>}>Contact</Route>
     <Route path="/ProductList" element={<ProductList/>}>ProductList</Route>
                <Route path="/category/:categoryName" element={<CategoryDetail />} />
                <Route path="/product/:productId" element={<ProductDetail />} />        
    </Routes>
    
    
    </BrowserRouter>
   
    </CartProvider>
    </div>
    </> );
}

export default App;
