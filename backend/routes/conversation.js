const express = require("express")
const app = express()
const Conversation = require("../models/Conversation")

// Récupérer toutes les conversations

app.get('/', async (req,res) => {
    
    try{
        const conversation = await Conversation.find().exec()
        
        res.json(conversation)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
