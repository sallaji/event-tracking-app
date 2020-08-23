const dispatcher = require('express').Router();
const auth_controller = require('./auth-controller');
const {authJwt} = require("../middlewares");
const user_controller = require('./user_controller');
const event_controller = require('./event-controller');
const ticket_controller = require('./ticket_controller');


dispatcher.route('/login')
.post(auth_controller.login)
.get(auth_controller.isLoggedIn);

dispatcher.route('/users')
.get(authJwt.isLoggedIn, user_controller.users)
.post(user_controller.createUser);

dispatcher.route('/events')
.post(authJwt.isLoggedIn, event_controller.create)
.get(authJwt.isLoggedIn,event_controller.findAll);

dispatcher.route('/events/:id')
.put(authJwt.isLoggedIn, event_controller.update)
.get(authJwt.isLoggedIn, event_controller.findById);

dispatcher.route('/events/:id/tickets')
.post(ticket_controller.create)
.get(ticket_controller.findAll);
module.exports = dispatcher;