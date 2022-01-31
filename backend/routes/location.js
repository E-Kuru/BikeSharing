const express = require("express")
const app = express()
const Location = require("../models/Location")
const Annonce = require("../models/Annonce")
const User = require("../models/User")
const { verifyUser, verifySession } = require("../middlewares/checkUser")

app.get('/', async (req,res) => {
    
    try{
        const location = await Location.find().exec()
        
        res.json(location)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.post('/:id', verifyUser, async (req,res) => {
    const { id } = req.params
    
    try{
        const annonceUser = await Annonce.findById(id)
        console.log("user",annonceUser)
        const location = await new Location({
            ...req.body,
            borrower: req.user,
            annonce : id,
            lender : annonceUser.user
        })
        
        const locationInsered = await location.save()

        const findUser = await User.findById(req.user)
        findUser.locations = [...findUser.locations, location._id]
        findUser.save()

        const findAnnonce = await Annonce.findById(id)
        findAnnonce.locations = [...findAnnonce.locations, location._id]
        findAnnonce.save()

        res.json(location)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
