const express = require("express")
const app = express()
const Conversation = require("../models/Conversation")


app.get('/', async (req,res) => {
    
    try{
        const user = await Conversation.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
