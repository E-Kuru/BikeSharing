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

// Récupérer tous les messages d'une conversation

app.get('/:id', async (req,res) => {
    
    // Id de la conversation 

    const { id } = req.params

    try{
        const messages = await Message.find({conversation : id}).exec()
        
        res.json(messages).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Post pour créer un message

app.post('/:id', verifyUser, async (req,res) => {

    const { id } = req.params
    
    try{
        const findConversation = await Conversation.findOne({ location : id})
        const message = await new Message({
            ...req.body,
            user: req.user,
            conversation: findConversation
        })

        const messageInsered = await message.save()
       
        findConversation.messages = [...findConversation.messages, messageInsered._id]
        findConversation.save()

        res.json(message)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app
