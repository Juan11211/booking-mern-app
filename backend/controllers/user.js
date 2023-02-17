const User = require('../models/User');

    const getUsers = async(req, res, next) => { 
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (err){
        next(err)
    }
} 


const findUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.hotelId);
      res.status(200).json(hotel);
    } catch (err) {
      next(err);
    }
   }

const updatedUser = async (req, res, next) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.hotelId,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err)
    }
}

const deleteUser = async(req, res, next) => { 
    try{ 
        await User.findByIdAndDelete(req.params.hotelId);
        res.status(200).json('User has been deleted')
    }
    catch(err){
        next(err)
    }
}

module.exports = {getUsers, findUser, updatedUser, deleteUser}