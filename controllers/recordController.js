const mysql = require('mysql');
var Data = {host:"localhost", user:"root", password:"root", database:"tododb"};

function addRecord(userId, title, record)
{
    let connect = mysql.createConnection(Data);
    connect.query(`INSERT INTO record (UserId, Title, Record) VALUES (${userId}, "${title}", "${record}")`,
    function(err, result)
    {
        if(err) throw err;
    });
    connect.end();
}

function editRecord(recordId, title, record)
{
    let connect = mysql.createConnection(Data);
    connect.query(`UPDATE record SET record.Title = '${title}', record.Record = '${record}' WHERE RecordId LIKE ${recordId}`, function(err, result)
    {
        if(err) throw err;
    });
    connect.end();
}

function deleteRecord(recordId)
{
    let connect = mysql.createConnection(Data);
    connect.query(`DELETE FROM record WHERE record.RecordId = ${recordId}`);
    connect.end();
}



module.exports = {addRecord, editRecord, deleteRecord};