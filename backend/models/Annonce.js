const { Schema, model } = require("mongoose")
const annonceSchema = new Schema ({

    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        Default: true
    },
    price: {
        type: Number
    },
    picture: {
        type: String
    },
    location: [{
        type: Schema.Types.ObjectId,
        ref: "Location"
    }],
    coment: [{
        type: Schema.Types.ObjectId,
        ref: "Coment"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{
    timestamps: true
})

const Annonce = model("Annonce",annonceSchema)

module.exports = Annonce



