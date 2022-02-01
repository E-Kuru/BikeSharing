const express = require("express")
const app = express()
const Message = require("../models/Message")
const Conversation = require("../models/Conversation")
const { verifyUser } = require("../middlewares/checkUser")

// Récupérer tous les messages

app.get('/', async (req,res) => {
    
    try{
        const message = await Message.find().exec()
        
        res.json(message)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Post pour créer un message

app.post('/:id', verifyUser, async (req,res) => {
    const { id } = req.params
    
    try{
        const findConversationId = await Conversation.findOne({ location : id})
        // console.log("id location", findConversation)
        const message = await new Message({
            ...req.body,
            user: req.user,
            conversation: findConversationId
        })

        const messageInsered = await message.save()
        // console.log(messageInsered)
        
        const findConversation = await Conversation.find(req.user)
        findConversation.messages = [...findConversation.messages, messageInsered._id]
        findConversation.save()

        res.json(message)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
