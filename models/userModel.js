const conn = require('../connection.js');

const Users = conn.sequelize.define('user', {

    userId : {
        type : conn.Sequelize.INTEGER(9),
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    userName : conn.Sequelize.STRING(45),
    email : conn.Sequelize.STRING(45),
    password : conn.Sequelize.STRING(32),
    refresh_token : conn.Sequelize.STRING(200)

}, {tableName : 'user', timestamps : false});

module.exports = Users;