const { Schema, model } = require("mongoose")

const conversationSchema = new Schema ({
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location"
    },
},{
    timestamps: true
})

const Conversation = model("Conversation",conversationSchema)

module.exports = Conversation