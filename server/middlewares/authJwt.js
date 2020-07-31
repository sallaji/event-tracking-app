const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("Kein Token gegeben")
  }
  jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("error en token")
    }
    req._id = decoded.id;
    next();
  })
};

const authJwt = {
  verifyToken
};
module.exports = authJwt;
