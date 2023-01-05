const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    name: { 
        type: String, // name of hotel
        required: true 
    }, 
    type: {
        type: String, // type of property, hotel, cabin, etc
        required: true
    },
    city: {
        type: String, 
        required: true
    }, 
    address: {
        type: String, 
        required: true
    }, 
    distance: {
        type: String, 
        required: true
    }, 
    photos: {
        type: [String], // multiple strings
    }, 
    city: {
        type: String, 
        required: true
    }, 
    desc: { 
        type: String, 
        required: true
    }, 
    rating: { 
        type: Number, 
        min: 0, 
        max: 5
    },
    rooms: { 
        type: [String] // rooms model will be child of hotels
    },
    cheapestPrice: { 
        type: Number, 
        required: true
    },
    featured: { 
        type: Boolean, // gonna have features hotels, 
        default: false
    }
     
})

module.exports = mongoose.model('Hotel', hotelSchema)