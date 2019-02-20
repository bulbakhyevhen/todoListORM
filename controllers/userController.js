const mysql = require('mysql');
const queryConstructor = require('../connect.js');

function getUserRecords(_id)
{
    let records = queryConstructor.createQuery(
    `SELECT * FROM user INNER JOIN record ON user.UserId = record.UserId WHERE user.UserId LIKE ${_id}`
    );
    
    return records;
}

module.exports = {getUserRecords};
