const userGroups = require('./userGroupsModel');
const users = require('./userModel');
const groups = require('./groupModel');
const boards = require('./boardModel');
const records = require('./recordModel');

userGroups.hasMany(users, {foreignKey : 'userId'});
userGroups.hasMany(groups, {foreignKey : 'groupId'});

users.hasMany(boards, {foreignKey : 'userId'});
groups.hasMany(boards, {foreignKey : 'boardId'});
boards.hasMany(records, {foreignKey : 'boardId'});

users.belongsToMany(groups, {
    
    through : userGroups,
    foreignKey : 'userId'
    
});

groups.belongsToMany(users, {

    through : userGroups,
    foreignKey : 'groupId'

});

module.exports = {userGroups, users, groups, boards, records};