const Event = require('../models/Event');
const Profit = require('../models/Profit');
const Expense = require('../models/Expense');
const Ticket = require('../models/Ticket');
const Sponsor = require('../models/Sponsor');
exports.create = async (req, res) => {
  const {
    name,
    date,
    responsible,
    uid,
    profits,
    tickets,
    sponsors,
    expenses
  } = req.body;
  const user = req.user;
  const userId = uid ? uid : user.id;
  try {
    let event = await new Event({
      date,
      name,
      responsible,
      user: userId
    });

    for (const profit of profits) {
      const tempProfit = await new Profit({...profit, event: event.id});
      const error = await tempProfit.validate();
      if (error) {
        throw new Error(error)
      }
      event.profits.push(tempProfit);
    }
    for (const ticket of tickets) {
      const tempTicket = await new Ticket({...ticket, event: event.id});
      const error = await tempTicket.validate();
      if (error) {
        throw new Error(error)
      }
      event.tickets.push(tempTicket);
    }
    for (const sponsor of sponsors) {
      const tempSponsor = await new Sponsor({...sponsor, event: event.id});
      const error = await tempSponsor.validate();
      if (error) {
        throw new Error(error)
      }
      event.sponsors.push(tempSponsor);
    }
    for (const expense of expenses) {
      const tempExpenses = await new Expense({...expense, event: event.id});
      const error = await tempExpenses.validate();
      if (error) {
        throw new Error(error)
      }
      event.expenses.push(tempExpenses);
    }
    event.profits.forEach(item => item.save());
    event.tickets.forEach(item => item.save());
    event.sponsors.forEach(item => item.save());
    event.expenses.forEach(item => item.save());
    event.save();
    res.status(200).json(event);
  } catch (e) {
    console.error("Error ocurred: ", e);
    res.status(412).json(e.errors)
  }

// event.save()
// .then((createdEvent) => {
//   if (createdEvent) {
//     profit.event = createdEvent.id;
//     profit.save()
//     .then((error, profit) => {
//
//       if (profit) {
//         res.status(200).json(createdEvent)
//       }
//     })
//   }
// })
// .catch(err => res.status(412).json(err.errors))
}
;

exports.findAll = (req, res) => {
  let {search, sort = 'date', ascending = 'true'} = req.query;
  Event.search(search).sort((ascending === 'true' ? '' : '-') + sort)
  .then(events => {
    if (sort === 'own') {
      return events.filter(event => event.user.id === req.user.id);
    }
    return events
  }).then(events => res.status(200).json(events))
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