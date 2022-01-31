const express = require("express")
const app = express()
const Coment = require("../models/Coment")


app.get('/', async (req,res) => {
    
    try{
        const coment = await Coment.find().exec()
        
        res.json(coment)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
