import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
          <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
            <span className='logo'>Booking App</span>
          </Link>
            <div className='navItems'>
                <button className='navButtons'>Sign up</button>
                <button className='navButtons'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar