import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';



function Routing() {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/'  element={<LoginPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/CreateAccount' element={<CreateAccount/>}/>
      

      </Routes>
    </BrowserRouter>
   
   </>
  )
}

export default Routing
