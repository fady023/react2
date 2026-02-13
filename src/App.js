import React from 'react'
import { Routes, Route } from 'react-router-dom'  
import Products from './Routes/Products'
import SingleProduct from './Routes/SingleProduct'
import Cart from "./Routes/Cart"

const  App = ()=> {
  return (
    <>
    

    <Routes>
      <Route path='/'  element={<Products />}/>
      <Route path='/products'  element={<Products />}/>
      <Route path='/products/:id'  element={<SingleProduct />}/>
      <Route path='/cart' element={<Cart/>} />
    </Routes> 
      
    </>
  )
}

export default App
