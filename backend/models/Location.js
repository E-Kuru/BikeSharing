const { Schema, model } = require("mongoose")

const locationSchema = new Schema ({
    dateBegin: {
        type: String
    },
    dateEnd: {
        type: String
    },
    status: {
        type: String
    },
    price: {
        type: Number
    },
    adressBegin: {
        type: String
    },
    adressEnd: {
        type: String
    },
    conversation: [{
        type: Schema.Types.ObjectId,
        ref: "Conversation"
    }],
    annonce: {
        type: Schema.Types.ObjectId,
        ref: "Annonce"
    },
    lender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    borrower: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    paiement: {
        type: Schema.Types.ObjectId,
        ref: "Paiement"
    },
},{
    timestamps: true
})

const Location = model("Location",locationSchema)

module.exports = Location
