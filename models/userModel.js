const jwt_token = require('../token.js');
const queryConstructor = require('../connect.js'); 
const key = require('../key.js');

function getUserbyId(_userId)
{
    queryConstructor.createQuery(
        `SELECT * FROM user WHERE userId = ${_userId}`
    ).then(result => res.send(result));
}

function getUserbyToken(req, res)
{
    queryConstructor.createQuery(
        `SELECT * FROM user WHERE userId = ${req.access_token.userId}`
        ).then(result => res.send(result));
}

function updateUser(req, res)
{
    queryConstructor.createQuery(
        `UPDATE user SET userName = ${req.body.userName}, email = ${req.body.email}, password = ${req.body.password} WHERE userId = ${req.access_token.userId}`
     ).then(result => getUserbyId(req.body.userId));
}

function createUser(req, res)
{
    queryConstructor.createQuery(
        `INSERT INTO user (userName, email, password) VALUES (${req.body.userName}, ${req.body.email}, ${req.body.password})`
    ).then(result => getUserbyId(result.insertId));
}

function Authentification(req, res)
{
    queryConstructor.createQuery(
        `SELECT userId, userName, email, password FROM user WHERE email = "${req.body.email}" AND password = "${req.body.password}"`
    ).then(result => 
        {
            if(result.length !== 0)
            {
                res.send(jwt_token.sendTokenSet(req, res, result[0].userId, result[0].userName, jwt_token.getExprirationDate(10)));
            }
            else
            {
                res.sendStatus(403);
            }
        });
}

function reSignTokenSet(req, res)
{
    var token = req.headers.refresh_token;
    var decoded_token = jwt_token.verifyToken(token, key);

    queryConstructor.createQuery(`
        SELECT refresh_token FROM user WHERE userId = ${decoded_token.userId}`
        ).then(result => 
            {
                if(token == result[0].refresh_token)
                {

                    jwt_token.sendTokenSet(req, res, result[0].userId, result[0].userName, jwt_token.getExprirationDate(10));

                }
                else 
                {
                    res.sendStatus(403);
                }
            });
}

module.exports = {updateUser, getUserbyToken, createUser, Authentification, reSignTokenSet};