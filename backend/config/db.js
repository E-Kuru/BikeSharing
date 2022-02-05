const mongoose = require("mongoose")
require('dotenv').config();

const dbConnect = () => {
  const dbName = 'BikeSharing'

  try {
     mongoose.connect(`mongodb+srv://admin:admin@projects.2fjq3.mongodb.net/BikeSharing?retryWrites=true&w=majority`)
    mongoose.connect(`${process.env.db}`)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}