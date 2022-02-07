const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const passport = require("./config/passport")
const { dbConnect } = require("./config/db.js")

require('dotenv').config();

const users = require('./routes/users')
const auth = require('./routes/auth')
const annonce = require('./routes/annonce')
const message = require('./routes/message')
const conversation = require('./routes/conversation')
const location = require('./routes/location')
const coment = require('./routes/coment')
const files = require('./routes/files')

dbConnect()


app.use(cors({
  origin: true,
  // origin: process.env.domain,
  credentials: true
}))

app.use(express.json())

app.use(session({
  secret: 'MyAwesomeSecret',
  resave: true,
  saveUninitialized: false 
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)
app.use('/users', users)
app.use('/annonce', annonce)
app.use('/message', message)
app.use('/conversation', conversation)
app.use('/location', location)
app.use('/coment', coment)
app.use('/files', files)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})