const queryConstructor = require('../connect.js');

function getUserbyId(_userId)
{
    return queryConstructor.createQuery(
    `SELECT * FROM user WHERE userId = ${_userId}`
    );
}

function getUsers(req, res)
{
    queryConstructor.createQuery(
    `SELECT * FROM user`
    ).then(result => res.send(result));
}

function singUp(req, res)
{
    queryConstructor.createQuery(
    `INSERT INTO
     user (userId, userName, email, password)
     VALUES (${req.body.userId}, "${req.body.userName}", "${req.body.email}", "${req.body.password}")
     WHERE userId = ${req.body.userId}`
    ).then(result => getUserbyId(result.insertId));
}

function updateUser(req, res)
{
    queryConstructor.createQuery(
    `UPDATE user SET
     userName = ${req.body.userName}, 
     email = ${req.body.email},
     password = ${req.body.password} 
     WHERE userId = ${req.body.userId}`
     ).then(result => getUserbyId(req.body.userId))                                   
      .then(result => res.sned(result));
}


module.exports = {getUsers, updateUser, getUserbyId};