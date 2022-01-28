const { Schema, model } = require("mongoose")

const messageSchema = new Schema ({
    contenu: {
        type: String
    },
    conversation: {
        type: Schema.Types.ObjectId,
        ref: "Conversation"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
})

const Message = model("Message",messageSchema)

module.exports = Message