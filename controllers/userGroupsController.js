const db = require('../models');

function getUserGroups(req, res){

    db.userGroups.findAll({

        where : {userId : req.access_token.userId},
        include : [db.groups]

    }).then(groups => res.send(groups));

}

function getUserGroup(req, res){

    db.userGroups.findAll({
        
        where : {groupId : req.params.id},
        include : [{
            model : db.groups,
            include : [
                {model : db.users}, 
                {model : db.boards, include : [db.records]}
            ]
        }]

    }).then(group => res.send(group));

}

function updateGroup(req, res){
    db.groups.update({

        where : {groupId : req.params.id},
        groupName : req.body.groupName,
        groupDescription : req.body.groupDescription

    }).then(db.groups.findByPk(req.params.id)).then(group => res.send(group));
}

function deleteGroup(req, res){

    db.userGroups.findAll({

        attributes : ['groupId'],
        where : {groupId : req.params.id},

    }).then(db.userGroups.destroy);

}

function createGroup(req, res){

    db.groups.create({

        groupName : req.body.groupName,
        groupDescription : req.body.groupDescription,

    }).then(group => res.send(group));

}

function leaveGroup(req, res){

    db.userGroups.destroy({

        where : {
            userId : req.access_token.userId,
            groupId : req.params.id
        }

    }).then(res.send(req.params.id));

}

function addUser(req, res){

    db.users.findOne({

        where : {email : req.body.email}

    }).then(user => {

        if(user.length !== 0){
            return user;
        }
        else{
            res.send('user not founded');
        }

    }).then(user =>{

        return db.userGroups.create({
            
            userId : user.userId,
            groupId : req.body.groupId

        });

    }).then(user => res.send(user));

}


module.exports = {getUserGroups, getUserGroup, updateGroup, deleteGroup, createGroup, leaveGroup, addUser}