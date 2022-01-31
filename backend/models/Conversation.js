const { Schema, model } = require("mongoose")

const conversationSchema = new Schema ({
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required : true
    },
},{
    timestamps: true
})

const Conversation = model("Conversation",conversationSchema)

module.exports = Conversation