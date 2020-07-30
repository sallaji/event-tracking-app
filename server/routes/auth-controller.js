const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user)
  } else {
    return res.status(401).send("Not logged in")
  }
};
/**
 * Authorization Controller
 */
const passport = require('passport');

exports.login = (req, res) => {
  passport.authenticate("local", function (err, user, info) {
    if (!user) {
      return res.status(400).json({error: info.message})
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({error: err});
      }
      var token = jwt.sign({id: user.id}, process.env.SESSION_SECRET, {
        expiresIn: 86400 //24 Stunden
      });
      return res.status(200).json({...user, accessToken: token})
    })
  })(req, res)
};
