// const express = require('express');
// const User = require('../models/User.js');
// const authRouter = express.Router();
// const bcrypt = require('bcrypt');

// // authRouter.post('/register', async(req, res, next) => {
// //     try{
    
// //     const salt = bcrypt.genSaltSync(10)
// //     const hash = bcrypt.hashSync(req.body.password, salt) // ANOTHER METHOD FOR HASH
    
   
// //         const newUser = new User({
// //             username: req.body.username,
// //             email: req.body.email,
// //             password: hash,
// //         }) // you could do req.body
// //         await newUser.save()
// //         res.status(201).send('User has been created')
// //     }
// //     catch(err){
// //         next(err)
// //     }
// // } )

// // authRouter.post('/login', async(req, res, next) => { 
// //     try{
// //         const user = User.findOne({username: req.body.username})
// //         if(!user) return next(createError(404, 'User not found'))

// //         const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
// //         if(!isPasswordCorrect) return next(createError(400, 'wrong password or username'))
// //         res.status(200).send('')
// //     }
// //     catch(err){
// //         next(err)
// //     }
// // })

// module.exports = authRouter; 

const express = require('express')
const authRouter = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

// Signup
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(user){
      res.status(403)
      return next(new Error("That username is already taken"))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
                            // payload,            // secret
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
      return res.status(201).send({ token, user: savedUser.withoutPassword() })
    })
  })
})

// Login
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(!user){
      res.status(403)
      return next(new Error("Username or Password are incorrect"))
    }
    
    user.checkPassword(req.body.password, (err, isMatch) => {
      if(err){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      if(!isMatch){
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      return res.status(200).send({ token, user: user.withoutPassword() })
    })
  })
})


module.exports = authRouter