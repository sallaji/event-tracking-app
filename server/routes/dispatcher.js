const dispatcher = require('express').Router();
const auth_controller = require('./auth-controller');
//TODO: IMplement authjwt
const {authJwt} = require("../middlewares");
const passport = require('passport');
const user_controller = require('./user_controller');
const event_controller = require('./event-controller');
const ticket_controller = require('./ticket_controller');
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

dispatcher.route('/login')
.post(auth_controller.login)
.get(auth_controller.isLoggedIn);

dispatcher.route('/users')
.get(isLoggedIn, user_controller.users)
.post(user_controller.createUser);

dispatcher.route('/events')
.post(event_controller.create)
.get(isLoggedIn,event_controller.findAll);

dispatcher.route('/events/:id')
.put(event_controller.update)
.get(event_controller.findById);

dispatcher.route('/events/:id/tickets')
.post(ticket_controller.create)
.get(ticket_controller.findAll);
module.exports = dispatcher;