const conn = require('../connection.js');

const Records = conn.sequelize.define('record', {
    
    recordId : {
        type : conn.Sequelize.INTEGER(9),
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    userId : conn.Sequelize.INTEGER(11),
    title : conn.Sequelize.STRING(45),
    record : conn.Sequelize.STRING(500),
    done : conn.Sequelize.BOOLEAN(),
    boardId : conn.Sequelize.INTEGER(11)
    
}, {tableName: 'record', timestamps : false});

module.exports = Records;