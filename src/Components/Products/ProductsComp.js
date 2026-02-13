import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mystyle from './products.module.css'
import { Link } from 'react-router-dom'
import {useDispatch} from  "react-redux"
import productSlice from "../../Components/Redux/ProductSlice"

const ProductsComp = () => {

  const [products, setproducts] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setproducts(res.data.products)
    })
  }, [])

  const dispatch = useDispatch()

  return (
    <>


      <div className={mystyle.products}>

        {products.slice(0, 10).map((el) => (
          <div key={el.id} className={mystyle.product}>

            <img src={el.thumbnail}></img>
            <h1> {el.title}</h1>
            <h3> {el.description} </h3>
            <h5> {el.price} </h5>

            <div className={ mystyle.btn}>
              <button onClick={()=>dispatch(productSlice.actions.addtocart(el))}>Add To Cart</button>
              <Link to={`/products/${el.id}`}>Show more ... </Link>
            </div>

          </div>

        ))}

      </div>



    </>
  )
}

export default ProductsComp
