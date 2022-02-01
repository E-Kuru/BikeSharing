const express = require("express")
const app = express()
const Conversation = require("../models/Conversation")
const Location = require("../models/Location")
const User = require("../models/User")
const { verifyUser } = require("../middlewares/checkUser")

// Récupérer toutes les conversations

app.get('/', async (req,res) => {
    
    try{
        const conversation = await Conversation.find().exec()
        
        res.json(conversation)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Post pour créer une location

app.post('/:id', verifyUser, async (req,res) => {
    const { id } = req.params
    
    try{
        const locationUser = await Location.findById(id)
        console.log("id location",locationUser)
        const newConversation = await new Conversation({
            borrower: req.user,
            location: id,
            lender: locationUser.lender
        })

        const conversationInsered = await newConversation.save()
        console.log("conversation",newConversation)

        const findUser = await User.findById(req.user)
        findUser.conversations = [...findUser.conversations, conversationInsered._id]
        findUser.save()

        const findLocation = await Location.findById(id)
        findLocation.conversation = conversationInsered._id
        findLocation.save()

        res.json(newConversation)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
