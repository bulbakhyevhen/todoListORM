const recordRouter = require('../TodoList/routers/recordRouter.js');

module.exports = (app) => 
{
    app.use('/records', recordRouter);
};