import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProductComp=()=> {

  const [product,setproduct] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then((res)=>setproduct(res.data),{}).catch((err)=>console.log(err))
  })


  return (
    <>
        <h1>{product.title}</h1>
      
    </>
  )
}

export default SingleProductComp
