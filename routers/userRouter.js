const express = require('express');
const controllers = require('../controllers');
const userRouter = express.Router();


userRouter.get('/signIn');
userRouter.get('/signUp');
userRouter.post('/signIn', controllers.auth.Authentification);
userRouter.post('/signUp', controllers.user.createUser);
userRouter.post('/refresh-token', controllers.auth.reSignTokens);
userRouter.get('/account', controllers.user.getUser);
userRouter.put('/account', controllers.user.updateUser);

module.exports = userRouter;