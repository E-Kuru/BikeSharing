const express = require("express")
const app = express()
const Annonce = require("../models/Annonce")
const User =  require("../models/User")
const { verifyUser } = require("../middlewares/checkUser")

// Récupérer toutes les annonces

app.get('/', async (req,res) => {
    
    try{
        const annonces = await Annonce.find().exec()
        
        res.json(annonces).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Récupérer les annonces en fonction de leur catégorie 

app.get('/:categorie', async (req,res) => {

    const {categorie} = req.params
    
    try{
        const annonces = await Annonce.find({ categorie : categorie}).exec()
        
        res.json(annonces).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Trouver des locations dans un secteur proche

app.get('/location/:lat/:lng', 
async (req,res) => {

    const {lat, lng} = req.params

    const options = {
        location : {
            $geoWithin : {
                $centerSphere : [[Number(lat),Number(lng)], 15 / 3963.2]
            }
        }
    }

    const findRentals = await Annonce.find(options)

    res.json(findRentals)
})

// Créer une annonce

app.post('/', verifyUser, async (req,res) => {
    
    try{
        const annonce = new Annonce({
            ...req.body,
            user: req.user
        })
        const OneAnnonce = await annonce.save()

        const findUser = await User.findById(req.user)
        findUser.annonces = [...findUser.annonces, OneAnnonce._id]
        await findUser.save()

        res.json(annonce)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Put pour modifier une annonce

app.put('/:id', verifyUser, async (req,res) => {
    const { id } = req.params

    try {
        const annonceUpdate =  await Annonce.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new : true}
        ).exec()

        res.json(annonceUpdate)

    } catch {
        res.status(500).json({ error: err })
    }
})

// Récupérer une annonce en fonction de l'id

app.get('/:id', verifyUser, async (req,res) => {
    const { id } = req.params
    
    try{
        const annonces = await Annonce.findById(id)
        
        res.json(annonces).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Supprimer une annonce

app.delete('/:id', verifyUser, async (req, res) => {
    const { id } = req.params
  
    try {
        const findAnnonce = await Annonce.findById(id).lean().exec()
        
        const findUser = await User.findOne({_id : findAnnonce.user.valueOf()}).exec()

        const annonceUpdated = findUser.annonces.filter(e => e != id)
        findUser.annonces = annonceUpdated
        findUser.save()

        const deleteAnnonce = await Annonce.deleteOne({_id : id})

        res.json({succes : "This announcement successfully been deleted"})

    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
