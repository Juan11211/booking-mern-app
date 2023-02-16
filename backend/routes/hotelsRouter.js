const express = require('express');
const hotelsRouter = express.Router();
const createError = require('../utils/error')
const Hotel = require('../models/Hotel');
const { createHotel, getHotels, findHotel, updateHotel, deleteHotel, countByCity, countByType } = require('../controllers/hotel');


//GET ALL
hotelsRouter.get('/', getHotels);

//GET BY ID
hotelsRouter.get('/:hotelId', findHotel);

// Create 
hotelsRouter.post('/', createHotel); 

//Update 
hotelsRouter.put('/:hotelId', updateHotel);

//DELETE 
hotelsRouter.delete('/:hotelId', deleteHotel)

//query cities 
hotelsRouter.get('/', async(req, res, next) => { 
    
})

hotelsRouter.get('/countByCity', countByCity);

hotelsRouter.get('/countbytype', countByType);


module.exports = hotelsRouter; 