import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';
import HomePage from './HomePage';



function Routing() {
  return (
   <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/'  element={<LoginPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/CreateAccount' element={<CreateAccount/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>

      

      </Routes>
    </BrowserRouter>
   
   </>
  )
}

export default Routing
