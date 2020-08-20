const passport = require('passport')
const jwt = require("jsonwebtoken");
//TODO Replace with jwt passport structure
const verifyToken = async (req, res) => {
  await passport.authenticate('jwt', function (err, user,info) {
    if (user) {
      req.user = {
        id: user.id,
        name: user.name,
        type: user.type,
        // token: user.token,
        // expiresIn: user.expires
      };
    } else {
      res.status(403).send("User not logged in")
    }
  })(req, res)

};

const authJwt = {
  verifyToken
};
module.exports = authJwt;
