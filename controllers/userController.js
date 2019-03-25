const db = require('../models');
const token = require('../auth/token.js');

function getUser(req, res){

    db.users.findByPk(req.access_token.userId)
        .then(users => res.send(users))
            .catch(err => res.status(500).send(err));

}

function createUser(req, res){

    db.users.create({

        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password

    }).then(user => res.send(user))
        .catch(err => {res.status(500).send(err)});

}

function updateUser(req, res){

    db.users.update({
 
        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password,

    },
    {where : {userId : req.access_token.userId}})
    .then(user => { return db.users.findByPk(req.access_token.userId) })
        .then(user => res.send(user))
            .catch(err => {res.sendStatus(500)});

}

function deleteUser(req, res){

    db.users.destroy({

        where : {userId : req.access_token.userId}

    }).then(res.send(req.access_token.userId))
        .catch(err => {res.status(500).send(err)});

}

function Authentification(req, res){

    db.users.findOne({

        where : {email : req.body.email, password : req.body.password}

        }).then(user => {
    
            if(user.length !== 0){

                let tokens = token.createTokenSet(user.userId, user.userName, Date.now());
                updateRefreshToken(user.userId, tokens.refresh_token);

                res.send(tokens);
            }
            else {
                res.sendStatus(401);
            }

        }).catch(err => {res.status(500).send(err)});

}

function updateRefreshToken(userId, refresh_token){

    db.users.update({

        refresh_token : refresh_token

    },{where : {userId : userId}});

}

function reSignTokens(req, res){

    var request_token = req.headers.refresh_token;
    var decoded_token = token.verifyToken(request_token);

    db.users.findOne({

        where : {refresh_token : decoded_token.userId}

    }).then(user => {

        if(request_token == result.refresh_token){
            
            let tokens = token.createTokenSet(user.userId, user.groupId, Date.now());

            res.send(tokens);
        }
        else {

            res.sendStatus(406);

        }

    }).catch(err => {res.status(500).send(err)});

}
module.exports = {getUser, createUser, updateUser, deleteUser, Authentification, reSignTokens, updateRefreshToken};