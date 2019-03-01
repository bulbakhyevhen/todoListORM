const express = require('express');
const users = require('../models/userModel.js');
const userRouter = express.Router();

userRouter.put('/account/:jwt-id', users.updateUser);
userRouter.get('/account/:jwt-id', users.updateUser);
