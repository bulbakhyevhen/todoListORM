const conn = require('../connection.js');

const Boards = conn.sequelize.define('board', {

    boardId : {
        type : conn.Sequelize.INTEGER(11), 
        primaryKey : true, 
        allowNull : false, 
        autoIncrement : true
    },
    userId : conn.Sequelize.INTEGER(11),
    boardName : conn.Sequelize.STRING(45),
    position : conn.Sequelize.INTEGER(11)

}, {tableName : 'board', timestamps : false});

module.exports = Boards;