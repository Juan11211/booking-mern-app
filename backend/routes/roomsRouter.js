const express = require('express')
const roomsRouter = express.Router();
const Room = require('../models/Room')
const Hotel = require('../models/Hotel');
const { deleteRoom, getOneRoom, getAllRooms, createRoom, updateRoom, updateRoomAvailability } = require('../controllers/room');
const { verifyAdmin } = require('../utils/verifyToken');

// create room 
roomsRouter.post('/:hotelId', verifyAdmin, createRoom)

//GET ALL
roomsRouter.get('/', getAllRooms)

//GET BY ID
roomsRouter.get('/:roomId', getOneRoom)

//UPDATE ROOM
roomsRouter.put('/:roomId',verifyAdmin, updateRoom)

//UPDATE AVAILABLITY
roomsRouter.put('/availability/:roomId', updateRoomAvailability)

//DELETE 
roomsRouter.delete('/:roomId/:hotelId', verifyAdmin, deleteRoom)





module.exports = roomsRouter; 