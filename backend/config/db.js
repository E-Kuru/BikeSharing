const mongoose = require("mongoose")

const dbConnect = () => {
  const dbName = ''

  try {
    mongoose.connect(``)
    console.log(`Connected to ${dbName} database`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = { 
  dbConnect
}