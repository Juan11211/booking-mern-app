import React from 'react'
import './featured.css'
import hotel1 from '../../images/hotel1.png.png'
import nyc from '../../images/nyc.jpg'

function Featured() {
  return (
    <div className='featured'>
      <div className='feautredItem'>
        <img src={nyc} alt='hotel1' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Miami</h1>
          <h2>123 Miami</h2>
        </div>
      </div>
      <div className='feautredItem'>
        <img src={nyc} alt='hotel1' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Miami</h1>
          <h2>123 Miami</h2>
        </div>
      </div>
      <div className='feautredItem'>
        <img src={nyc} alt='hotel1' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Miami</h1>
          <h2>123 Miami</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured; 