const Users = require('../models/users.model');

function postUser(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing user name.',
    });
  }

  const newUser = {
    id: Users.length,
    name: req.body.name,
  };

  res.json(newUser);
}

function getUsers(req, res) {
  res.json(Users);
}

function getUser(req, res) {
  const userId = Number(req.params.id);
  console.log(userId)
  const user = Users[userId];
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
}

module.exports = {
  postUser,
  getUsers,
  getUser,
};
