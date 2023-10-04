const express = require('express');

const usersRouter = express.Router();

const usersController = require('../controllers/users.controller');

usersRouter.post('/', usersController.postUser);

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', usersController.getUser);

module.exports = usersRouter;
