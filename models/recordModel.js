const db = require('../connection.js');

const Records = db.sequelize.define('record', {
    recordId : {
        type : db.Sequelize.INTEGER(9),
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    userId : db.Sequelize.INTEGER(11),
    title : db.Sequelize.STRING(45),
    record : db.Sequelize.STRING(500),
    done : db.Sequelize.BOOLEAN()
}, {tableName: 'record', timestamps : false});

module.exports = Records;