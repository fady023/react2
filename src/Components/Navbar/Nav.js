import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <span>LOGO</span>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
      
    </nav>
  )
}

export default Nav
