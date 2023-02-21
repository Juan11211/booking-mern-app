const Room = require('../models/Room');
const Hotel = require('../models/Hotel');


const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  };
const updateRoom = async(req, res, next) => { 
    try{
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.roomId, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateRoom)
    } catch (err){ 
        next(err)
    }
}; 

const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.roomId },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };

const deleteRoom = async(req, res, next) => { 
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
    
};

const getOneRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.roomId);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
   };

const getAllRooms = async(req, res, next) => { 
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }
    catch (err){
        next(err)
    }
}

module.exports = {deleteRoom, getOneRoom, getAllRooms, createRoom, updateRoom, updateRoomAvailability}