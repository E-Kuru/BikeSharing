const express = require("express")
const app = express()
const Annonce = require("../models/Annonce")
const User =  require("../models/User")
const { verifyUser, verifySession } = require("../middlewares/checkUser")


app.get('/', async (req,res) => {
    
    try{
        const annonces = await Annonce.find().exec()
        
        res.json(annonces).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// créer une annonce

app.post('/', verifyUser, async (req,res) => {
    
    try{
        const annonce = new Annonce({
            ...req.body,
            user: req.user
        })
        const OneAnnonce = await annonce.save()
        
        const annonceInsered = await annonce.save()

        const findUser = await User.findById(req.user)
        console.log('user',findUser)
        findUser.annonces = [...findUser.annonces, annonce._id]
        findUser.save()

        res.json(annonce)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})



module.exports = app
