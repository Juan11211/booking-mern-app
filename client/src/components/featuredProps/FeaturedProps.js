import React from 'react'
import hotel1 from '../../images/hotel1.png.png'
import './featuredProps.css'

function FeaturedProps() {
  return (
    <div className='featuredProp'>
        <div className='featuredPropItem'>
            <img className='featuredPropImg' src={hotel1} alt='featuredList' />
            <span className='featuredName'>XY Miami</span>
            <span className='featuredCity'>Miami, FL</span>
            <span className='featuredPrice'>$145</span>
            <div className='featuredRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='featuredPropItem'>
            <img className='featuredPropImg' src={hotel1} alt='featuredList' />
            <span className='featuredName'>XY Miami</span>
            <span className='featuredCity'>Miami, FL</span>
            <span className='featuredPrice'>$145</span>
            <div className='featuredRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='featuredPropItem'>
            <img  className='featuredPropImg' src={hotel1} alt='featuredList' />
            <span className='featuredName'>XY Miami</span>
            <span className='featuredCity'>Miami, FL</span>
            <span className='featuredPrice'>$145</span>
            <div className='featuredRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProps