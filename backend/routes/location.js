const express = require("express")
const app = express()
const Location = require("../models/Location")


app.get('/', async (req,res) => {
    
    try{
        const location = await Location.find().exec()
        
        res.json(location)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
