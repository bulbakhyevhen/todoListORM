const users = require('../models/userModel');

function getUser(req, res){

    users.findByPk(req.access_token).then(users => res.send(users));

}

function createUser(req, res){

    users.create({

        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password

    }).then(user => res.send(user));

}

function updateUser(req, res){

    users.update({

        where : {userId : req.access_token}, 
        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password,

    }).then(user => req.send(user));

}

function deleteUser(req, res){

    users.destroy({

        where : {userId : req.access_token}

    });
}

module.exports = {getUser, createUser, updateUser, deleteUser};