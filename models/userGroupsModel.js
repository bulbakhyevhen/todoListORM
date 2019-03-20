const conn = require('../connection.js');

const userGroups = conn.sequelize.define('usergroups', {
    
    groupId : {
        type :conn.Sequelize.INTEGER(9),
        primaryKey : true
    },
    userId : {
        type : conn.Sequelize.INTEGER(9),
        }

}, {tableName : 'usergroups', timestamps : false});

module.exports = userGroups;