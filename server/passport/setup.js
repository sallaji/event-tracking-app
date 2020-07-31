const User = require("../models/User");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.serializeUser((user, done) => {
  return done(null, user.id)
}); //todo o user.id?
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    return done(err, user);
  });
});

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SESSION_SECRET
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
      User.findOne({_id: payload.sub})
      .then(user => {
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
      .catch(error => done(error, null))
    }
);

// const localStrategy = new LocalStrategy({usernameField: 'name'},
//     (name, password, done) => {
//       User.findOne({name: name}, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, {message: 'Inkorrekter Name'});
//         }
//         User.validPassword(password, user.password, (isMatch) => {
//           if (isMatch) {
//             return done(null, user);
//           } else {
//             return done(null, false, {message: 'Falsches Passwort.'});
//           }
//         });
//       });
//     }
// );

module.exports = (passport) => {
  passport.use(jwtStrategy);
  // passport.use(localStrategy);
};


