const conn = require('../connection.js');

const Groups = conn.sequelize.define('groups', {

    groupId : {

        type : conn.Sequelize.INTEGER(11), 
        primaryKey : true, 
        allowNull : false, 
        autoIncrement : true 
    
    },
    groupName : conn.Sequelize.STRING(50),
    groupDescription : conn.Sequelize.STRING(100)

}, {tableName : 'groups', timestamps : false});

module.exports = Groups;