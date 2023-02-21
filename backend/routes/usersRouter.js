const express = require('express');
const { findUser, updatedUser, deleteUser, getUsers } = require('../controllers/user');
const usersRouter = express.Router();
const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken')

// usersRouter.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('Hello, you are logged in.')
// })

// usersRouter.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello USER, you are logged in, you can delete acct.')
// })

// usersRouter.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('Hello ADMIN, you are logged in, you can delete all acct.')
// })


//GET ALL
usersRouter.get('/', verifyAdmin, getUsers)

//GET BY ID
usersRouter.get('/:userId', verifyUser, findUser);

//Update 
usersRouter.put('/:userId', verifyUser, updatedUser);

//DELETE 
usersRouter.delete('/:userId', verifyUser, deleteUser)

module.exports = usersRouter; 