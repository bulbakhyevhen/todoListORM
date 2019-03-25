const express = require('express');
const users = require('../controllers').user;
const userRouter = express.Router();


userRouter.get('/signIn');
userRouter.get('/signUp');
userRouter.post('/signIn', users.Authentification);
userRouter.post('/signUp', users.createUser);
userRouter.post('/refresh-token', users.reSignTokens);
userRouter.get('/account', users.getUser);
userRouter.put('/account', users.updateUser);
userRouter.delete('/account', users.deleteUser);

module.exports = userRouter;