const express = require('express');
const users = require('../models/userModel.js');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');

userRouter.use('/', (req, res, next) =>
{
    var token = jwt.decode(req.headers.access_token, 'secret');
    req.access_token = token;
    next();
});
userRouter.get('/');
userRouter.put('/', users.updateUser);

module.exports = userRouter;