const Sequelize = require('sequelize');
const {dbName, userName, password, host, dialect} = require('./config.json');



const sequelize = new Sequelize(dbName, userName, password, {
    host : host,
    dialect : dialect,
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = {Sequelize, sequelize};
