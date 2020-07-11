/**
 * Authorization Controller
 */
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {
  passport.authenticate("local", function (err, user, info) {
      if (!user) {
        return res.status(400).json({error: info.message})
      }
      req.logIn(user, function (err) {
        if (err) {
          console.error("error desde el auth controller");
          return res.status(400).json({error: err});
        }
        return res.status(200).json({sucess: `logged in ${user.id}`})
      })
  })(req,res)
};

exports.signin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({email: email})
  .then(user => {
    if (user) {
      return res.status(400).json(
          {errors: "E-Mail wird bereits von einem anderen Benutzer verwendet"})
    }
    const newUser = new User({email, password});
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        newUser.password = hash;
        newUser.save((err, creatdUser) => {
          if (err) {
            res.status(412).send('Nutzer konnte nicht erstellt werden')
          } else {
            res.status(201).json(creatdUser)
          }
        })
      })
    })
  })
};