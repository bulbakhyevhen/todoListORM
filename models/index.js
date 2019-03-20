const userGroups = require('./userToGroup');
const users = require('./userModel');
const groups = require('./groupModel');
const boards = require('./boardModel');
const records = require('./recordModel');

userToGroup.hasMany(users, {foreignKey : 'userId'});
userToGroup.hasMany(groups, {foreignKey : 'groupId'});

users.hasMany(boards, {foreignKey : 'userId'});
groups.hasMany(boards, {foreignKey : 'boardId'});
boards.hasMany(records, {foreignKey : 'boardId'});

users.belongsToMany(groups, {
    
    through : userToGroup,
    foreignKey : 'userId'
    
});

groups.belongsToMany(users, {

    through : userToGroup,
    foreignKey : 'groupId'

});

module.exports = {userGroups, users, groups, boards, records};