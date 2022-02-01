const express = require("express")
const app = express()
const Coment = require("../models/Coment")
const User = require("../models/User")
const Annonce = require("../models/Annonce")
const { verifyUser } = require("../middlewares/checkUser")

// Récupérer tous les commentaires

app.get('/', async (req,res) => {
    
    try{
        const coment = await Coment.find().exec()
        
        res.json(coment)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Post pour créer un commentaire

app.post('/:id', verifyUser, async (req,res) => {

    // ID de l'annonce
    
    const { id } = req.params
    
    try{
        const coment = await new Coment({
            ...req.body,
            user: req.user,
            annonce: id
        })
        
        const comentInsered = await coment.save()
        const findUser = await User.findById(req.user)
        findUser.coments = [...findUser.coments, coment._id]
        findUser.save()

        const findAnnonce = await Annonce.findById(id)
        findAnnonce.coments = [...findAnnonce.coments, coment._id]
        findAnnonce.save()

        res.json(coment)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
