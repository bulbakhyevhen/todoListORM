const mysql = require('mysql');
var Data = {host:"localhost", user:"root", password:"root", database:"tododb"};

function getUserRecords(id, callback)
{
    var connection = mysql.createConnection(Data);
    connection.query(`SELECT * FROM user INNER JOIN record ON user.UserId = record.UserId WHERE user.UserId LIKE ${id}`, function(err, _records)
    {
        if(err) throw err;
        callback(_records);
    });
    connection.end();
}
module.exports = {getUserRecords};