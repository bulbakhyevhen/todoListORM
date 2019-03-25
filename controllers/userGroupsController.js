const db = require('../models');

function getUserGroups(req, res){

    db.userGroups.findAll({

        where : {userId : req.access_token.userId},
        include : [db.groups]

    }).then(groups => res.send(groups))
        .catch(err => {res.status(500).send(err)});
        
}

function getUserGroup(req, res){

    const {id} = req.params;

    db.userGroups.findAll({
        
        where : {groupId : id},
        include : [{
            model : db.groups,
            include : [
                {model : db.users, attributes : {exclude : ['refresh_token', 'password']}}, 
                {model : db.boards, include : [db.records]}
            ]
        }]

    }).then(group => res.send(group))
        .catch(err => {res.status(500).send(err)});

}

function updateGroup(req, res){
    
    const {id} = req.params;

    db.groups.update({

        groupName : req.body.groupName,
        groupDescription : req.body.groupDescription

    },{ where : {groupId : id}})
        .then(() => { return db.groups.findByPk(id) })
            .then(group => res.send(group))
                .catch(err => {res.status(500).send(err)});

}

function deleteGroup(req, res){

    const {id} = req.params;

    db.userGroups.findAll({

        attributes : ['groupId'],
        where : {groupId : id},

    }).then(db.userGroups.destroy)
    .catch(err => {res.status(500).send(err)});

}

function createGroup(req, res){

    db.groups.create({

        groupName : req.body.groupName,
        groupDescription : req.body.groupDescription,

    }).then(group => res.send(group))
        .catch(err => {res.sendStatus(500)});

}

function leaveGroup(req, res){

    db.userGroups.destroy({

        where : {
            userId : req.access_token.userId,
            groupId : req.params.id
        }

    }).then(res.send(req.params.id))
        .catch(err => {res.status(500).send(err)});

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

    }).then(user => res.send(user))
        .catch(err => {res.status(500).send(err)});

}


module.exports = {getUserGroups, getUserGroup, updateGroup, deleteGroup, createGroup, leaveGroup, addUser}