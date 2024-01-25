import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? 'link active' : 'link')}
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        // className={({ isActive }) => (isActive ? 'link active' : 'link')}
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        // className={({ isActive }) => (isActive ? 'link active' : 'link')}
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        // className={({ isActive }) => (isActive ? 'link active' : 'link')}
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;
