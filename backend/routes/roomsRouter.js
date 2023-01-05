const express = require('express')
const roomsRouter = express.Router();
const Room = require('../models/Room')
const Hotel = require('../models/Hotel')

// create room 
roomsRouter.post('/:hotelId', async(req, res, next) => { 
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body) // creating new room model

    try{
        const savedRoom = await newRoom.save() // saving newRoom model
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id},
            })
        } catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    }
    catch (err){
        next(err)
    }})

    //GET ALL
roomsRouter.get('/', async(req, res, next) => { 
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }
    catch (err){
        next(err)
    }
})

//GET BY ID
roomsRouter.get('/:roomId', async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.roomId);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
   });


//DELETE 
roomsRouter.delete('/:roomId/:hotelId', async(req, res, next) => { 
    const hotelId = req.params.hotelId; 
    try{ 
        await Room.findByIdAndDelete(req.params.roomId);
    try{
        await Hotel.findByIdAndUpdate(hotelId, {
            $pull: { rooms: req.params.roomId },
          });
    }   catch (err) {
        next(err);
      }
        res.status(200).json('Room data has been deleted')
    }
    catch(err){
        next(err)
    }
    
})



module.exports = roomsRouter; 