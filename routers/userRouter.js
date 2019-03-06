const express = require('express');
const users = require('../models/userModel.js');
const userRouter = express.Router();


userRouter.get('/signIn');
userRouter.get('/signUp');
userRouter.post('/signIn', users.Authentification);
userRouter.post('/signUp', users.createUser);
userRouter.post('/refresh-token', users.reSignTokenSet);
userRouter.get('/account', users.getUserbyToken);
userRouter.put('/account', users.updateUser);

module.exports = userRouter;