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
        console.error("error desde el auth controller");
        return res.status(400).json({error: err});
      }
      return res.status(200).json({sucess: `logged in ${user.id}`})
    })
  })(req, res)
};
