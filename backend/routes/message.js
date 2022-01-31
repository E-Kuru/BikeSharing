const express = require("express")
const app = express()
const Message = require("../models/Message")


app.get('/', async (req,res) => {
    
    try{
        const message = await Message.find().exec()
        
        res.json(message)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
