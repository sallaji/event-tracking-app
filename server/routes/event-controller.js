const Event = require('../models/Event');
const User = require('../models/User');
const mongoose = require('mongoose');

console.log("mirame" + mongoose.connection);
// const Ticket = require('../models/Ticket');

exports.create = (req, res) => {
  const {name, date, responsible, uid} = req.body;
  const user = req.user;
  const userId = uid ? uid : user.id;
  const event = Event({name, date, responsible, user: userId});
  event.save()
  .then(createdEvent => res.status(200).json(createdEvent))
  .catch(err => res.status(412).json(err.errors))
};

exports.findAll = (req, res) => {
  Event.find().populate('user', ['name', 'type'])
  .then(events => res.status(200).json(events))
  .catch(err => res.status(500).send('Database Error'));
};

exports.update = (req, res) => {
  Event.findById(req.params.id)
  .then(event => {
    const {name, date, responsible, uid} = req.body;
    const userId = uid ? uid : req.user.id;
    event.name = name || event.name;
    event.date = date || event.date;
    event.responsible = responsible;
    event.user = userId;
    event.save()
    .then(updatedEvent => {
      Event.populate(updatedEvent, {path: 'user', select: ['name', 'type']})
      .then(populated => res.status(200).json(populated))
      .catch(err => res.status(412).send('Benutzerdaten nicht zurückgegeben'))
    })
    .catch(err => res.status(412).send(err))
  })
  .catch(err => res.status(404).send('Event nicht gefunden'));
};