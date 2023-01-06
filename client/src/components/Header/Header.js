import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import './Header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format, addDays} from 'date-fns'


function Header({type}) {

    const [openDate, setOpenDate] = useState(false)
        const [dates, setDates] = useState([
            {
                startDate: new Date(),
                endDate: addDays(new Date(), 7),
                key: 'selection',
              }
        ])

        const [openOptions, setOpenOptions] = useState(false)
        const [options, setOptions] = useState({
            adult: 1,
            children: 0, 
            rooms: 1,
        })

        const handleOption = (name, operation) => { 
            setOptions(prev => {
                return {
                    ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1, 
                }
            })
        }



  return (
  <div className='header'>
    <div className={type === "list" ? "headContainer listMode" : "headerContainer" }>
    <div className='headerList'>
        <div className='headerList--item active'>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className='headerList--item'>
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className='headerList--item'>
        <FontAwesomeIcon icon={faCar} />
        <span>Cars</span>
        </div>
        <div className='headerList--item'>
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className='headerList--item'>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Taxis</span>
        </div>
       </div> 
       { type !== 'list' && 
        <>
       <h1 className='headerTitle'>A lifetime of discounts? Come ON!</h1>
            <p className='headerDesc'>Get rewarded for your travels - unlock instant <br />
               savings of 25% or more with a free account 
            </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className='headerSearch'>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input 
                type='text' 
                placeholder='Where are you going?'
                className='headerSearchInput'
                />
                </div>
                <div className='headerSearchItem'>
                 <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span onClick={() => setOpenDate(!openDate)}className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
               {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />}
                </div>
                <div className='headerSearchItem'>
                 <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                 <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} · children · ${options.rooms} room `}</span>
                 { openOptions && 
                 <div className='options'>
                     <div className='optionItems'>
                         <div className='optionCounter'>
                         <span className='optionText'>Adult</span>
                         <button className='optionCounterButton' disabled={options.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>
                         <span className='optionCounterNumber'>{options.adult}</span>
                         <button className='optionCounterButton' onClick={() => handleOption('adult', 'i')}>+</button>
                     </div>
                     </div>
                     <div className='optionItems'>
                     <div className='optionCounter'>
                         <span className='optionText'>Children</span>
                         <button className='optionCounterButton' disabled={options.children <= 0} onClick={() => handleOption('children', 'd')}>-</button>
                         <span className='optionCounterNumber'>{options.children}</span>
                         <button className='optionCounterButton' onClick={() => handleOption('children', 'i')}>+</button>
                     </div>
                     </div>
                     <div className='optionItems'>
                     <div className='optionCounter'>
                         <span className='optionText'>Room</span>
                         <button className='optionCounterButton' disabled={options.rooms <= 1} onClick={() => handleOption('rooms', 'd')}>-</button>
                         <span className='optionCounterNumber'>{options.rooms}</span>
                         <button className='optionCounterButton' onClick={() => handleOption('rooms', 'i')}>+</button>
                     </div>
                     </div>
                 </div>}
            </div>
            <div className='headerSearchItem'>
                <button className='headerBtnn'>Search</button>
            </div>
        </div>
        </>}
    </div>
  </div>
);
};
 
export default Header