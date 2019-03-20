const db = require('../models');

function getUser(req, res){

    db.users.findByPk(req.access_token).then(users => res.send(users));

}

function createUser(req, res){

    db.users.create({

        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password

    }).then(user => res.send(user));

}

function updateUser(req, res){

    db.users.update({

        where : {userId : req.access_token}, 
        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password,

    }).then(user => res.send(user));

}

function deleteUser(req, res){

    db.users.destroy({

        where : {userId : req.access_token}

    });
}

module.exports = {getUser, createUser, updateUser, deleteUser};