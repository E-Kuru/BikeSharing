const express = require("express")
const app = express()
const Annonce = require("../models/Annonce")


app.get('/', async (req,res) => {
    
    try{
        const user = await Annonce.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
