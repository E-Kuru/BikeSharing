const { Schema, model } = require("mongoose")

const conversationSchema = new Schema ({
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    borrower: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    lender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    rental: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required : true
    },
},{
    timestamps: true
})

const Conversation = model("Conversation",conversationSchema)

module.exports = Conversation