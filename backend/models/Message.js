const { Schema, model } = require("mongoose")

const messageSchema = new Schema ({
    content: {
        type: String,
        required : true
    },
    conversation: {
        type: Schema.Types.ObjectId,
        ref: "Conversation",
        required : true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
},{
    timestamps: true
})

const Message = model("Message",messageSchema)

module.exports = Message