const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const { expressjwt } = require('express-jwt')


mongoose.connect(
    'mongodb://localhost:27017/booking-app',
    () => console.log('Connected to the DB')
  )

app.use(express.json())

app.use('/api/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']})) // req.user
app.use('/api/users', require('./routes/usersRouter.js'))
app.use('/api/hotels', require('./routes/hotelsRouter.js'))
app.use('/api/rooms', require('./routes/roomsRouter.js'))
 

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(9000, () => {
    console.log(`Server is running on local port 9000`)
  }) 