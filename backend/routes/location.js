const express = require("express")
const app = express()
const Location = require("../models/Location")
const Annonce = require("../models/Annonce")
const User = require("../models/User")
const Conversation = require("../models/Conversation")
const { verifyUser } = require("../middlewares/checkUser")

// Récupérer toutes les locations

app.get('/', async (req,res) => {
    
    try{
        const location = await Location.find().exec()
        
        res.json(location)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Récupérer toutes les locations d'un utilisateur

app.get('/user', verifyUser, async (req,res) => {
    
    try {
        const allLocations = await Location.find({user_id : req.user}).exec()
        res.json(allLocations)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Créer une location

app.post('/:id', verifyUser, async (req,res) => {
    const { id } = req.params
    
    try{
        const annonceUser = await Annonce.findById(id)
        const location = await new Location({
            ...req.body,
            borrower: req.user,
            annonce : id,
            lender : annonceUser.user
        })
        
        const locationInsered = await location.save()

        const findUser = await User.findById(req.user)
        findUser.locations = [...findUser.locations, locationInsered._id]
        findUser.save()

        const findAnnonce = await Annonce.findById(id)
        findAnnonce.locations = [...findAnnonce.locations, locationInsered._id]
        findAnnonce.save()

        res.json(location)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
