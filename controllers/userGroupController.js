const groups = require('../models/groupModel');
const users = require('../models/userModel');
const boards = require('../models/boardModel');
const records = require('../models/recordModel');
const userToGroup = require('../models/userToGroup');

userToGroup.hasMany(users, {foreignKey : 'userId'});
userToGroup.hasMany(groups, {foreignKey : 'groupId'});

groups.belongsToMany(users, {
    through : userToGroup,
    foreignKey : 'groupId'
});
users.belongsToMany(groups, {
    through : userToGroup,
    foreignKey : 'userId'
})



function getUserGroup(req, res){

    userToGroup.findOne({

        where : {groupId : req.body.groupId},
        include : [groups, users]

    }).then(group => res.send(group));

}

function getUserGroups(req, res){

    userToGroup.findAll({
        where : {
            userId : req.access_token.userId
        },
        include : [groups]

    }).then(groups => res.send(groups));

}

function createGroup(req, res){

    groups.create({

        groupName : req.body.groupName,
        groupDescription : req.body.groupDescription

    }).then(group => res.send(group));

}

function editGroup(req, res){

    groups.update({

        where : {groupId : req.body.groupId},
        groupName : req.body.groupName,
        groupDescription : req.body.groupDescription

    }).then(groups.findByPk(req.body.groupId)).then(group => res.send(group));

}

function deleteGroup(req, res){

    groups.destroy({

        where : {groupId : req.body.groupId}

    }).then(res.send(req.body.groupId));

}

module.exports = {getUserGroups, getUserGroup, createGroup, editGroup, deleteGroup}