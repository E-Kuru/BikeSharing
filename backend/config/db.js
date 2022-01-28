const mongoose = require("mongoose")

const dbConnect = () => {
  const dbName = 'BikeSharing'

  try {
    mongoose.connect(`mongodb+srv://admin:admin@projects.2fjq3.mongodb.net/BikeSharing?retryWrites=true&w=majority`)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}