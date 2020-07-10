const dispatcher = require('express').Router();

const auth_controller = require('./auth-controller');

dispatcher.route('/login')
.post(auth_controller.login);

dispatcher.route('/signin')
.post(auth_controller.signin);
module.exports = dispatcher;