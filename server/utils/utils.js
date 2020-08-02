const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const verifyPassword = async (password, userPassword, callback) =>
    await bcrypt.compare(password, userPassword, (err, isMatch) =>
        callback(isMatch));

const issueJWT = (user) => {
  const _id = user._id;
  const expiresIn = 86400;
  const payload = {
    sub: _id,
    iat: Date.now()
  };
  const signedToken = jsonwebtoken.sign(payload, process.env.SESSION_SECRET,
      {expiresIn: expiresIn});
  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  }
};

module.exports.issueJWT = issueJWT;
module.exports.verifyPassword = verifyPassword;
