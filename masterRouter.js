const recordRouter = require('../TodoList/routers/recordRouter.js');
const authRouter = require('../TodoList/routers/authRouter.js');

module.exports = (app) => 
{
    app.use('/records', recordRouter);
    app.use('/auth', authRouter);
};