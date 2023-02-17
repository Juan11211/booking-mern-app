const express = require('express')
const usersRouter = express.Router();

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
module.exports = usersRouter; 