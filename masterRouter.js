const recordRouter = require('../TodoList/routers/recordRouter.js');
const userRouter = require('../TodoList/routers/userRouter.js');
const authRouter = require('../TodoList/routers/authRouter.js');



module.exports = function(app) {

    app.use('/auth', authRouter);
    app.use('/records', recordRouter);
    app.use('/records/account', userRouter);
}
