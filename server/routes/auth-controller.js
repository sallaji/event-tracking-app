const utils = require('../utils/utils');
const passport = require('passport');

exports.isLoggedIn = (req, res) => {
  passport.authenticate('jwt', function (err, user, info) {
     if(user){
       res.status(200).json(user)
     } else{
       res.status(403).send("error logged in")
     }
  })(req, res)
};

/**
 * Authorization Controller
 */

exports.login = (req, res, next) => {
  passport.authenticate('login', function (err, user, info) {

    if (!user) {
      return res.status(400).json({error: info.message})
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({error: err});
      }
      const jwt = utils.issueJWT(user);

      return res.status(200).send({
        id: user.id,
        name: user.name,
        type: user.type,
        token: jwt.token,
        expiresIn: jwt.expires
      })
    })
  })(req, res, next)
};
