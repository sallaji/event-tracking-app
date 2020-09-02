const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

exports.create = (req, res) => {
  const {price, quantity} = req.body;
  const eventId = req.params.id;
  const ticket = Ticket({price, quantity, event: eventId});
  ticket.save()
  .then(createdTicket => res.status(200).json(createdTicket))
  .catch(err => res.status(412).json(err.errors));
};

// exports.findAll = (req, res) => {
//   Ticket.find({event:req.params.id}).populate('event')
//   .then(tickets => res.status(200).json(tickets))
//   .catch(err => res.status(500).send('Database Error'));
// };
exports.findAll = (req, res) => {
  Ticket.find()
  // .populate('event')
  .then(tickets => res.status(200).json(tickets))
  .catch(err => res.status(500).send('Database Error'));
};

