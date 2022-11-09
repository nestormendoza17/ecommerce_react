import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
      </CartProvider>     
      </BrowserRouter>
      </div>
  );
}

export default App;