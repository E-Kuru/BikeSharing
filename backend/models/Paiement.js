const { Schema, model } = require("mongoose")

const paiementSchema = new Schema ({
    numCard: {
        type: Number
    },
    name: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    locations: [{
        type: Schema.Types.ObjectId,
        ref: "Location"
    }],
},{
    timestamps: true
})

const Paiement = model("Paiement",paiementSchema)

module.exports = Paiement