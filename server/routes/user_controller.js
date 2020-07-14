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

//TODO: Create custom validation messages in german! Check for unique name error message validation
exports.createUser = (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const type = req.body.type;
  const newUser = User({name: name, password: password, type: type});
  newUser.save((err, createdUser) => {
    if (err) {
      res.status(412).json(err)
    } else {
      res.status(201).json(createdUser)
    }
  })
};