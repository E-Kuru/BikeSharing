const express = require("express")
const app = express()
const Location = require("../models/Location")
const Annonce = require("../models/Annonce")
const User = require("../models/User")
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

app.get('/lender', verifyUser, async (req,res) => {
    
    try {
        const allLocations = await Location.find({lender : req.user}).exec()
        res.json(allLocations)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.get('/borrower', verifyUser, async (req,res) => {

    try {
        const allLocations = await Location.find({borrower : req.user}).exec()
        res.json(allLocations)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Récupérer une location d'un lender 

app.get('/lender/:id', verifyUser, async (req,res) => {

    // Id de la location 

    const { id } = req.params

    try {
        const OneLocation = await Location.findOne({_id : id }).exec()
        res.json(OneLocation)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Récupérer une location d'un borrower 

app.get('/borrower/:id', verifyUser, async (req,res) => {

    // Id de la location 

    const { id } = req.params

    try {
        const OneLocation = await Location.findOne({_id : id }).exec()
        res.json(OneLocation)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Créer une location

app.post('/:id', verifyUser, async (req,res) => {

    // Id de l'annonce 

    const { id } = req.params

    try{

        const annonceUser = await Annonce.findById(id)

        const location = await new Location({
            ...req.body,
            borrower: req.user,
            annonce : id,
            lender : annonceUser.user
        })

        location.save()

        const findBorrower = await User.findById(req.user)
        findBorrower.rentalsBorrower = [...findBorrower.rentalsBorrower, location._id]
        findBorrower.save()

        const findLender = await User.findById(annonceUser.user)
        findLender.rentalsLender = [...findLender.rentalsLender, location._id]
        findLender.save()

        const findAnnonce = await Annonce.findById(id)
        findAnnonce.rentals = [...findAnnonce.rentals, location._id]
        findAnnonce.save()

        res.json(location).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
