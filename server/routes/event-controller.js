const Event = require('../models/Event');
const Profit = require('../models/Profit');
const Expense = require('../models/Expense');
const Ticket = require('../models/Ticket');
const Sponsor = require('../models/Sponsor');
exports.create = (req, res) => {
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

  const event = new Event({
    date,
    name,
    responsible,
    user: userId
  });

  event.save()
  .then(event => {
        profits.forEach(profit => {
          const prf = new Profit({...profit, event: event.id});
          prf.save()
          .then(prf => {
            if (prf) {
              event.profits.push(prf)
            }
          });
        });
        tickets.forEach(ticket => {
          const tkt = new Ticket({...ticket, event: event.id});
          tkt.save()
          .then(tkt => {
            if (tkt) {
              event.tickets.push(tkt);
            }
          })
        });
        sponsors.forEach(sponsor => {
          const spr = new Sponsor({...sponsor, event: event.id});
          spr.save()
          .then(spr => {
            if (spr) {
              event.sponsors.push(spr)
            }
          });
        });
        expenses.forEach(expense => {
          const exp = new Sponsor({...expense, event: event.id});
          exp.save()
          .then(exp => {
            if (exp) {
              event.expenses.push(exp);
            }
          });
        })
      }
  )
  ;

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