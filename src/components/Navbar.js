import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  )
}

export default Navbar
