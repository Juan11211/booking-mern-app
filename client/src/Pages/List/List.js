import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import './List.css'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

function List() {


  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'> 
          <h1 className='searchTitle'>Search </h1>
          <div className='searchItem'>
          <label>Destination</label>
              <input placeholder={destination} type="text" />
          </div>
          <div className='searchItem'>
            <label className=''>Check-in Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
             {openDate && ( <DateRange 
                onChange={(item) => setDates([item.selection])}  
                ranges={dates} 
                minDate={new Date()}/>)}
          </div>
          <div className='searchItem'>
            <label>Options</label>
            <div className='searchOption'>
              <div className='optionItem'>
                <span className='optionText'>Min price <small>per night</small></span>
                <input type='number' className='optionInput' />
              </div>
              <div className='optionItem'>
                <span className='optionText'>Max price <small>per night</small></span>
                <input type='number' className='optionInput' />
              </div> 
              <div className='optionItem'>
                <span className='optionText' >Adult </span>
                <input type='number' min={1} className='optionInput' placeholder={options.adult}/>
              </div>
              <div className='optionItem'>
                <span className='optionText' >Children</span>
                <input type='number' min={0} className='optionInput' placeholder={options.children}/>
              </div>
              <div className='optionItem'>
                <span className='optionText' >Room </span>
                <input type='number' min={1} className='optionInput' placeholder={options.rooms}/>
              </div>
            </div>
          </div>
          <button>Search</button>
          </div>
            <div className='listResult'> 
            <SearchItem />
            <SearchItem />            
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            </div>
           
        </div>
      </div>
    </div>
  ) 
}

export default List