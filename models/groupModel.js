const db = require('../connection.js');

const Groups = db.sequelize.define('groups', {

    groupId : {

        type : db.Sequelize.INTEGER(11), 
        primaryKey : true, 
        allowNull : false, 
        autoIncrement : true 
    
    },
    groupName : db.Sequelize.STRING(50),
    groupDescription : db.Sequelize.STRING(100)

}, {tableName : 'groups', timestamps : false});

module.exports = userGroup;