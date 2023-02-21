const express = require('express');
const hotelsRouter = express.Router();
const createError = require('../utils/error')
const Hotel = require('../models/Hotel');
const { createHotel, getHotels, findHotel, updateHotel, deleteHotel, countByCity, countByType } = require('../controllers/hotel');
const { verifyAdmin } = require('../utils/verifyToken');

//GET ALL
hotelsRouter.get('/', getHotels);

//GET BY ID
hotelsRouter.get('/:hotelId', findHotel);

// Create 
hotelsRouter.post('/', verifyAdmin, createHotel); 

//Update 
hotelsRouter.put('/:hotelId', verifyAdmin, updateHotel);

//DELETE 
hotelsRouter.delete('/:hotelId', verifyAdmin, deleteHotel)

hotelsRouter.get('/countByCity', countByCity);

hotelsRouter.get('/countbytype', countByType);

module.exports = hotelsRouter; 