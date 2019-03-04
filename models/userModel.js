const queryConstructor = require('../connect.js'); 

function getUserbyId(_userId)
{
    queryConstructor.createQuery(
        `SELECT * FROM user WHERE userId = ${_userId}`
    ).then(result => res.send(result));
}

function getUsers(req, res)
{
    queryConstructor.createQuery(
        `SELECT * FROM user`
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
        `INSERT INTO user (userId, userName, email, password) VALUES (${req.body.userId}, ${req.body.userName}, ${req.body.email}, ${req.body.password})`
    ).then(result => getUserbyId(result.insertId));
}


module.exports = {getUsers, updateUser, getUserbyId, createUser};