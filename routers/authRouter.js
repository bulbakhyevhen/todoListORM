const express = require('express');
const users = require('../models/userModel.js');
const auth = require('../auth/auth.js');
const authRouter = express.Router();

authRouter.get('/create');
authRouter.get('/login');
authRouter.post('/create', users.createUser);
authRouter.post('/login', auth.checkPassword);
authRouter.post('/login/refresh-token', auth.reSignTokenSet);

module.exports = authRouter;