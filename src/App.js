import './App.css';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import Routing from './Components/Routing';
import { useState } from 'react';
import { CartProvider } from './Context/CartContext';

function App() {

  return (

    <CartProvider>
      <Routing />
    </CartProvider>


  );
}

export default App;
