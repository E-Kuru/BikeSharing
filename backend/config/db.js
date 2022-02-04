const mongoose = require("mongoose")
require('dotenv').config();

const dbConnect = () => {
  const dbName = 'BikeSharing'

  try {
    mongoose.connect(`${process.env.db}`)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}