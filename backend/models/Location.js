const { Schema, model } = require("mongoose")

const locationSchema = new Schema ({
    dateBegin: {
        type: String,
        required : true
    },
    dateEnd: {
        type: String,
        required : true
    },
    status: {
        type: String
    },
    price: {
        type: Number,
        required : true
    },
    conversations: [{
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