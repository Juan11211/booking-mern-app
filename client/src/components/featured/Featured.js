import React from 'react'
import './featured.css'
import hotel1 from '../../images/hotel1.png.png'
import nyc from '../../images/nyc.jpg'
import useFetch from '../../hooks/useFetch'



function Featured() {

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=New York,California,Miami") 

  console.log(data)
  return (
    <div className='featured'>
      {loading ? ( 
        "Loading please wait"
      )  : (
        <>
      <div className='feautredItem'>
        <img src={nyc} alt='hotel1' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>New York</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className='feautredItem'>
        <img src={nyc} alt='hotel1' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>California</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className='feautredItem'>
        <img src={nyc} alt='hotel1' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Miami</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default Featured; 