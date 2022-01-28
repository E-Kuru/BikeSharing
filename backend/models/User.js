const { Schema, model } = require("mongoose")
const userSchema = new Schema ({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    adress: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    status: {
        type: String
    },
    annonce: [{
        type: Schema.Types.ObjectId,
        ref: "Annonce"
    }],
    conversation: [{
        type: Schema.Types.ObjectId,
        ref: "Conversation"
    }],
    coment: [{
        type: Schema.Types.ObjectId,
        ref: "Coment"
    }],
    paiement: [{
        type: Schema.Types.ObjectId,
        ref: "Paiement"
    }]
},{
    timestamps: true
})

const User = model("User",userSchema)

module.exports = User



