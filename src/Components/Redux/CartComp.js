import React from 'react'
import { useSelector } from 'react-redux'
import mystyle from "../../Components/Products/products.module.css"
import { useDispatch } from 'react-redux';
import ProductSlice from './ProductSlice';

function CartComp() {
  const dispatch = useDispatch();


  const CartProducts = useSelector((state) => state.product.items)

  return (
    <div>
      <div className={mystyle.products}>
      {CartProducts?.map((ele,idx) => (

        <div key={idx} className={mystyle.product}>
          <img src={ele.thumbnail}></img>
          <h1> {ele.title}</h1>
          <h3> {ele.description} </h3>
          <h5> {ele.price} </h5>

              <button onClick={()=>dispatch(ProductSlice.actions.removeFromCart(ele))}>Remove from Cart</button>


        </div>
      ))}
      </div>
   </div>
  )
}

export default CartComp
