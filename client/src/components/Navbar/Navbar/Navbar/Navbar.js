import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
            <span className='logo'>Booking App</span>
            <div className='navItems'>
                <button className='navButtons'>Sign up</button>
                <button className='navButtons'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar