import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar/Navbar/Navbar'
import Header from '../../components/Header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faLocationDot, faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons"
import './Hotel.css'

function Hotel() {
  
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => { 
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
      let newSlideNumber; 

      if(direction === 'l'){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
      }

      setSlideNumber(newSlideNumber)
  }
  
  return ( 
    <div>
      <Navbar />
      <Header type='list'/>
      <div className='hotelContainer'>
       {open && <div className='slider'>
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
        <div className='sliderWrapper'>
          <img className='sliderImg' src={photos[slideNumber].src} alt='hotelimg' />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')}/>
        </div> }
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 w Harlem St.</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - less than 3 miles from times square</span>
             <span className='hotelPriceHighlight'>
               Book 3 nights and get a free taxi to and from airport
             </span>
             <div className='hotelImages'>
               {photos.map((photo, i) => ( // passing photo and index
                 <div className='hotelImgWrapper'>
                   <img onClick={() => handleOpen(i)} src={photo.src} alt='hotelImages' className='hotelImg' />
                 </div>
               ))}
             </div>
             <div className='hotelDetails'>
               <div className='hotelDetailsText'>
                 <div className='hotelTitle'>Stay in the heart of New York</div>
                 <div className='hotelDesc'>Hyatt Place New York City/Times Square features air-conditioned rooms with satellite flat-screen TV in the Hell's Kitchen district of New York City. Among the facilities of this property are a restaurant, a 24-hour front desk and a shared lounge, along with free WiFi throughout the property. The hotel has newspapers and an ATM machine that guests can use.

At the hotel, all rooms are equipped with a wardrobe. The private bathroom is equipped with a shower, a hairdryer and free toiletries. The units will provide guests with a fridge.

Guests at Hyatt Place New York City/Times Square can enjoy a continental breakfast.

A business center and vending machines with drinks and snacks are available on site at the accommodations.

Popular points of interest near Hyatt Place New York City/Times Square include Macy's, Times Square and Bryant Park. The nearest airport is Laguardia Airport.

This is our guests' favorite part of New York, according to independent reviews.

Couples in particular like the location – they rated it 8.8 for a two-person trip.</div>
               <div className='hotelDetailsPrice'>
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the heart of NYC, this property is top rated!
                  </span>
                  <h2>
                    <b>$945</b>(9 nights)
                  </h2>
                  <button>Reserve or book now!</button>
               </div>
               </div>
             </div>
             <MailList /> 
             <Footer />
          </div>

        </div>
      </div>


   
  )
}

export default Hotel