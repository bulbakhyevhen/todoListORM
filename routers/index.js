const groupRouter = require('./groupRouter');
const userRouter = require('./userRouter.js');
const boardRouter = require('./boardRouter');
const recordRouter = require('./recordRouter.js');
const validateRequest = require('../auth/validation.js');
const token = require('../auth/token.js');
const key = require('../auth/key.js');

module.exports = (app) => 
{
    app.use(validateRequest);
    app.use((req, res, next) => 
    {
        if((req.method == "POST" || req.method == "GET") && (req.url == '/signIn' || req.url == '/signUp'))
        {
            next();
        }
        else 
        {
            if(typeof(req.headers.access_token) == 'undefiend')
            {
                res.sendStatus(200);
            }
            else 
            {
                req.access_token = token.verifyToken(req.headers.access_token, key);
    
                next();
            }    
        }
    });
    app.use('/', userRouter);
    app.use('/boards', boardRouter);
    app.use('/records', recordRouter);
    app.use('/groups', groupRouter);
};
