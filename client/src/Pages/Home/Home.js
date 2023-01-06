import React from 'react'
import Navbar from '../../components/Navbar/Navbar/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from "../../components/featured/Featured"

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='homeContainer'>
        <Featured/>
        </div>
    </div>
  )
}

export default Home