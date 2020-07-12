const User = require('../models/User');

exports.users = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.status(500).send('database error')
    } else {
      res.status(200).json(users)
    }
  });
};

exports.createUser = (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const type = req.body.type.toLowerCase();
  User.findOne({name: name})
  .then(user => {
    if (user) {
      return res.status(400).json(
          {errors: "name bereits verwendet"})
    }

    //TODO: Refactoring, DRY too many status codes
    const newUser = new User();
    if (newUser.userTypeIsValid(type)) {
      newUser.type = type;
      newUser.name = name;
      newUser.hashPassword(password).then(hash => {
        newUser.password = hash;
        newUser.save((err, createdUser) => {
          if (err) {
            res.status(412).send(err)
          } else {
            res.status(201).json(createdUser)
          }
        })
      }).catch(err => res.status(412).send(err));
    } else {
      res.status(412).send('Invalid data')
    }
  })
};