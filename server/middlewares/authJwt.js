const passport = require('passport');
const isLoggedIn = (req, res, next) => {
  passport.authenticate('jwt', function (err, user, info) {
    if (user) {
      req.user = {
        id: user.id,
        name: user.name,
        type: user.type,
        // token: user.token,
        // expiresIn: user.expires
      };
      return next()
    } else {
      res.status(403).send("User not logged in")
    }
  })(req, res);
};

const authJwt = {
  isLoggedIn
};
module.exports = authJwt;