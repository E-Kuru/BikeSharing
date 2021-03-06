const passport = require("passport")
const passportLocal = require("passport-local")
const bcrypt = require("bcrypt")
const User = require("../models/User")

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy({ usernameField : "email"}, async (username, password, done) => {

    const user = await User.findOne({email : username}).lean().exec()

    if (!user) {
        return done(null, false)
    } 

    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
        return done(null, false)
    }

    return done(null, user)
}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  
    const user = await User.findById(id).exec()
    
    done(null, user._id.valueOf())
})

module.exports = passport