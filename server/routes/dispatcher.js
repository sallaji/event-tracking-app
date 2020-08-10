const dispatcher = require('express').Router();
const auth_controller = require('./auth-controller');
//TODO: IMplement authjwt
const {authJwt} = require("../middlewares");

const user_controller = require('./user_controller');
const event_controller = require('./event-controller');
const ticket_controller = require('./ticket_controller');

//TODO: Reeplace with jwt based authorization
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).send('Zugriff verboten')
};

dispatcher.route('/login')
.post(auth_controller.login)
.get(auth_controller.isLoggedIn);

dispatcher.route('/users')
.get(isLoggedIn, user_controller.users)
.post(user_controller.createUser);

dispatcher.route('/events')
.post(event_controller.create)
.get(event_controller.findAll);

dispatcher.route('/events/:id')
.put(event_controller.update)
.get(event_controller.findById);

dispatcher.route('/events/:id/tickets')
.post(ticket_controller.create)
.get(ticket_controller.findAll);
module.exports = dispatcher;