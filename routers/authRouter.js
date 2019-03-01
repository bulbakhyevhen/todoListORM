const express = require('express');
const auth = require('../auth/auth.js');
const authRouter = express.Router();

authRouter.get('/signIn');
authRouter.get('/signUp');
authRouter.post('/signIn', auth.signIn);
authRouter.post('/signUp', auth.signUp);
authRouter.post('/refresh-token', auth.checkRefreshToken);

module.exports = authRouter;