const express = require("express")
const app = express()
const passport = require('../config/passport')
const User = require('../models/User')
const bcrypt = require("bcrypt")

app.post(`/login`, passport.authenticate('local'), (req, res) => {
  
  if (req.user) {
    req.logIn(req.user, (err) => {
      if (err) throw err
      res.status(200).json(req.user)
    })
  }
})

app.post('/signup', async (req,res) => {
 
  try {
    const { password } = req.body
    const hash = await bcrypt.hash(password, 10)

    const newUser = new User ({
      ...req.body,
      password: hash
  })

  const signupUser = await newUser.save()
  res.status(200).json(signupUser)

  } catch (err) {
    res.status(500).json({ error: err })
  }
})

app.get('/me', (req, res) => {
  if (req.user) {
    res.json(req.user)
  } else {
    res.status(401).json({ error: "Unauthorized" })
  }
})

app.delete('/logout', (req, res) => {
  req.session.destroy()
  req.logout() 
  res.status(200).json({ success: "Sucess" })
})

module.exports = app