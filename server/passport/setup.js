const User = require("../models/User");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
    new LocalStrategy({usernameField: 'name'}, (name, password, done) => {
          User.findOne({name: name}, (err, user) => {
            if (err) {
              return done(err);
            }
            if (!user) {
              return done(null, false, {message: 'Inkorrekter Name'});
            }
            if (!user.validPassword(password, user.password)) {
              return done(null, false, {message: 'Falsches Passwort.'});
            }
            return done(null, user);
          });
        }
    ));

module.exports = passport;


