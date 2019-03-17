const db = require('../connection.js');
const Records = require('./recordModel');

const Boards = db.sequelize.define('board', {

    boardId : {
        type : db.Sequelize.INTEGER(11), 
        primaryKey : true, 
        allowNull : false, 
        autoIncrement : true
    },
    userId : db.Sequelize.INTEGER(11),
    groupId : db.Sequelize.INTEGER(9),
    boardName : db.Sequelize.STRING(45),
    position : db.Sequelize.INTEGER(11)

}, {tableName : 'board', timestamps : false});

Boards.hasMany(Records, {foreignKey : 'boardId'});
Records.belongsTo(Boards, {foreignKey : 'boardId'});

module.exports = Boards;