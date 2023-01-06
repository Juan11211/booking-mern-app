import React from 'react'
import './mailList.css'

function MailList() {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save time, save MONEY!</h1>
    <span className='mailDesc'>Sign up and subscribe to save on all the latest deals!</span>
    <div className='mailInputContainer'>
        <input type='text' placeholder='enter your email' />
            <button>Subscribe</button>
    </div>
    </div>
  )
}

export default MailList