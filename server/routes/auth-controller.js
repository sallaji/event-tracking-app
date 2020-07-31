const User = require('../models/User');
const utils = require('../utils/utils');

// exports.isLoggedIn = (req, res) => {
//   if (req.isAuthenticated()) {
//     return res.status(200).json(req.user)
//   } else {
//     return res.status(401).send("Not logged in")
//   }
// };

// exports.isLoggedIn = (req, res) => {
//   if (req.isAuthenticated()) {
//     return res.status(200).json(req.user)
//   } else {
//     return res.status(401).send("Not logged in")
//   }
// };

exports.isLoggedIn = (req,res)=>{
  passport.authenticate('jwt', function (err,user,info) {
    return res.status(200).json(user)
    //TODO AQUI FUNCIONA :)
  })(req, res)
};

/**
 * Authorization Controller
 */
const passport = require('passport');

exports.login = (req, res) => {

  User.findOne({name: req.body.name})
  .then(user => {
    if (!user) {
      return res.status(401).send('User not found')
    }
    utils.verifyPassword(req.body.password, user.password,
        (isMatch) => {
          if (isMatch) {
            const jwt = utils.issueJWT(user);
            return res.status(200).send({
              id: user.id,
              name: user.name,
              type: user.type,
              token: jwt.token,
              expiresIn: jwt.expires
            })
          } else {
            res.status(401).send('Inkorrektes Passwort')
          }
        })
  })
};

// exports.login = (req, res) => {
//   passport.authenticate('jwt', function (err, user, info) {
//
//     if (!user) {
//       return res.status(400).json({error: info.message})
//     }
//     req.logIn(user, function (err) {
//       if (err) {
//         return res.status(400).json({error: err});
//       }
//       const jwt = utils.issueJWT(user);
//
//       return res.status(200).send({
//         id: user.id,
//         name: user.name,
//         type: user.type,
//         token: jwt.token,
//         expiresIn: jwt.expires
//       })
//     })
//   })(req, res)
// };
