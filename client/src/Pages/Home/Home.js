import React from 'react'
import Navbar from '../../components/Navbar/Navbar/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from "../../components/featured/Featured"
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProps from '../../components/featuredProps/FeaturedProps'
import './Home.css'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProps />
        <MailList />
        <Footer /> 
        </div>
    </div>
  )
}

export default Home