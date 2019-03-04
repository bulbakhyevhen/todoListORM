const jwt_token = require('../auth/token.js');
const users = require('../models/userModel.js');
const queryConstructor = require('../connect.js');

function checkPassword(req, res)
{
    queryConstructor.createQuery(
        `SELECT userId, userName, email, password FROM user WHERE email = "${req.body.email}" AND password = "${req.body.password}"`
    ).then(result => 
        {
            if(result.length !== 0)
            {
                jwt_token.sendTokenSet(req, res, result[0].userId, result[0].userName, jwt_token.getExprirationDate(10));
            }
            else
            {
                res.sendStatus(403);
            }
        });
}

function checkPremission(req, res, next)
{
    if(typeof(req.headers.access_token !== 'undefiend'))
    {
        next();
    }
    else 
    {
        res.sendStatus(403);
    }
}

function reSignTokenSet(req, res)
{
    var token = req.headers.refresh_token;
    var decoded_token = jwt.decode(req.headers.refresh_token, 'secret');

    queryConstructor.createQuery(`
        SELECT refresh_token FROM user WHERE userId = ${decoded_token.userId}`
        ).then(result => 
            {
                if(token == result[0].refresh_token & decoded_token.exp > Date.now())
                {

                    jwt_token.sendTokenSet(req, res, result[0].userId, result[0].userName, jwt_token.getExprirationDate(10));

                }
                else 
                {
                    res.sendStatus(403);
                }
            });
}
module.exports = {checkPassword, checkPremission, reSignTokenSet};