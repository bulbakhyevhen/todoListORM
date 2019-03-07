const express = require('express');
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');
const userRouter = express.Router();


userRouter.get('/signIn');
userRouter.get('/signUp');
userRouter.post('/signIn', authController.Authentification);
userRouter.post('/signUp', userController.createUser);
userRouter.post('/refresh-token', authController.reSignTokens);
userRouter.get('/account', userController.getUser);
userRouter.put('/account', userController.updateUser);

module.exports = userRouter;