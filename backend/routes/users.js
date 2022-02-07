const express = require("express")
const app = express()
const User = require("../models/User")
const { verifyUser } = require("../middlewares/CheckUser")

// Get tous les users 

app.get('/', async (req,res) => {
    
    try{
        const user = await User.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Get un user par son id 

app.get('/infos', async (req,res) => {
    
    const {id} = req.params

    try {
        const oneUser =  await User.findById({_id: req.user }).exec()
        res.json(oneUser)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Put pour modifier infos du user

app.put('/user/modifier', verifyUser, async (req,res) => {

    try {
        const userUpdate =  await User.findOneAndUpdate(
            { _id: req.user },
            { ...req.body },
            { new : true}
        ).exec()

        res.json(userUpdate)

    } catch (err){
        res.status(500).json({ error: err })
    }
})

module.exports = app