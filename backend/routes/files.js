const express = require("express")
const app = express()
const multer = require("multer")
const fs = require("fs")
const moment = require('moment')
const Annonce = require("../models/Annonce")
moment.locale('fr')

const upload = multer({ dest: 'public' })

app.post('/:id', upload.single('photo'), async (req, res) => {

    const {id} = req.params

    const date = moment().format("DD-MM-YYYY")

    const photoUrl = `${req.file.destination}/${date}-${req.file.originalname}`

    fs.renameSync(req.file.path, photoUrl)

    const FindAnnonce = await Annonce.findByIdAndUpdate({_id : id}, {picture : photoUrl}, {new : true}).exec()

    res.json(FindAnnonce)

})

module.exports = app