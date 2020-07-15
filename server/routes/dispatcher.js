const dispatcher = require('express').Router();

const auth_controller = require('./auth-controller');
const user_controller = require('./user_controller');

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).json({error: 'Zugriff verboten'})
};

dispatcher.route('/login')
.post(auth_controller.login);

dispatcher.route('/users')
.get(isLoggedIn, user_controller.users)
.post(isLoggedIn, user_controller.createUser);

module.exports = dispatcher;