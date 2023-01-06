import React from 'react'
import './propertyList.css'
import nyc from '../../images/nyc.jpg'

function propertyList() {
  return (
    <div className='pList'>
        <div className='pListItem'>
            <img src={nyc} className='pListImg' alt='featured-list'/>
            <div className='pListTitle'>
                <h1>Hotels In New York</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={nyc} className='pListImg' alt='featured-list'/>
            <div className='pListTitle'>
                <h1>Hotels In New York</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src={nyc} className='pListImg' alt='featured-list' />
            <div className='pListTitle'>
                <h1>Hotels In New York</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList