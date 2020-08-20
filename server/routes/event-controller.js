const Event = require('../models/Event');

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

  let {search, sort = 'date', ascending = 'true'} = req.query;
  Event.search(search).sort((ascending === 'true' ? '' : '-') + sort)
  .then(events => {
    console.log("hola desde eventcontroller");
    // if(sort === 'own'){
    //   _.reject(events, event => event.user.id === req.user.id)
    // }
    res.status(200).json(events)
  })
  .catch(err => res.status(500).send('Database Error'));
};

exports.findById = (req, res) => {
  Event.findById(req.params.id)
  .then(event => {
    res.status(200).json(event)
  }).catch(err => {
    res.status(404).send(err)
  })
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
      res.status(200).json(updatedEvent)
    })
    .catch(err => res.status(412).send(err))
  })
  // .catch(err => res.status(404).send('Event nicht gefunden'));
  .catch(err => res.status(404).send('Event nicht gefunden'));
};