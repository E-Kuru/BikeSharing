const { Schema, model } = require("mongoose")

const userSchema = new Schema ({
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true
    },
    adress: {
        type: String
    },
    phoneNumber: {
        type: String,
        required : true
    },
    status: {
        type: String
    },
    annonces: [{
        type: Schema.Types.ObjectId,
        ref: "Annonce"
    }],
    conversations: [{
        type: Schema.Types.ObjectId,
        ref: "Conversation"
    }],
    coments: [{
        type: Schema.Types.ObjectId,
        ref: "Coment"
    }],
    paiements: [{
        type: Schema.Types.ObjectId,
        ref: "Paiement"
    }],
    rentalsLender: [{
        type: Schema.Types.ObjectId,
        ref: "Location"
    }],
    rentalsBorrower: [{
        type: Schema.Types.ObjectId,
        ref: "Location"
    }]
},{
    timestamps: true
})

const User = model("User",userSchema)

module.exports = User



