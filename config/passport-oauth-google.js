const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require("../models/user");
const randomPassword = require("secure-random-password");


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:3000/user/auth/google/callback"
  },
  async(accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findById({email: profile.email});
        if(user) {
             return done(null, user);
        }
        await User.create({email: profile.email, password: randomPassword.randomPassword(), name: profile.name});
      }
      catch(err) {
        return console.log("google-auth-error****: ", err);   
      }
  }
));

module.exports = passport;