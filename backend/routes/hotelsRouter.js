const express = require('express');
const hotelsRouter = express.Router();
const createError = require('../utils/error')
const Hotel = require('../models/Hotel')


//GET ALL
hotelsRouter.get('/', async(req, res, next) => { 
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }
    catch (err){
        next(err)
    }
})

//GET BY ID
hotelsRouter.get('/find/:hotelId', async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.hotelId);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
   });

// Create 
hotelsRouter.post('/', async(req, res, next) => {
    const newHotel = new Hotel(req.body)
    try{ 
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }
    catch(err){
        next(err)
    }
}); 

//Update 
hotelsRouter.put('/:hotelId', async (req, res, next) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.hotelId,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      next(err)
    }
})

//DELETE 
hotelsRouter.delete('/:hotelId', async(req, res, next) => { 
    try{ 
        await Hotel.findByIdAndDelete(req.params.hotelId);
        res.status(200).json('Hotel data has been deleted')
    }
    catch(err){
        next(err)
    }
})

//query cities 
hotelsRouter.get('/', async(req, res, next) => { 
    
})

hotelsRouter.get('/countByCity', async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
})
hotelsRouter.get('/countByT ype ', async(req, res, next) => {
    
})


module.exports = hotelsRouter; 