const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

app.use(express.json())

const connect = async () => { 
  try{
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MONGODB')
  } catch (error){
    throw(error)
  }
};


app.use('/api/auth', require('./routes/authRouter'))
app.use('/api/users', require('./routes/usersRouter'))
app.use('/api/hotels', require('./routes/hotelsRouter'))
app.use('/api/rooms', require('./routes/roomsRouter'))


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
  connect()
    console.log(`Server is running on local port 9000`)
  }) 