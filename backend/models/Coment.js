const { Schema, model } = require("mongoose")

const comentSchema = new Schema ({
    contenu: {
        type: String,
        required : true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    annonce: {
        type: Schema.Types.ObjectId,
        ref: "Annonce",
        required : true
    },
},{
    timestamps: true
})

const Coment = model("Coment",comentSchema)

module.exports = Coment