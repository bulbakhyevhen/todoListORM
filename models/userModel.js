const db = require('../connection.js');

const Users = db.sequelize.define('user', {
    userId : {
        type : db.Sequelize.INTEGER(9),
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    userName : db.Sequelize.STRING(45),
    email : db.Sequelize.STRING(45),
    password : db.Sequelize.STRING(32),
    refresh_token : db.Sequelize.STRING(200)
}, {tableName : 'user', timestamps : false});

module.exports = Users;