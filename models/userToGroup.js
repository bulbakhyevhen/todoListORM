const db = require('../connection.js');

const userToGroup = db.sequelize.define('usergroups', {
    id : {
        type : db.Sequelize.INTEGER(9),
        primaryKey : true,
        allowNull : false,
    },
    groupId : {
        type :db.Sequelize.INTEGER(9),
    },
    userId : {
        type : db.Sequelize.INTEGER(9),
        }

}, {tableName : 'usergroups', timestamps : false});

module.exports = userToGroup;