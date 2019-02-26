const queryConsrtuctor = require('../connect.js');

function getUserRecords(req, res)
{
    let userId = req.params["userId"];
    queryConsrtuctor.createQuery(
    `SELECT * FROM user INNER JOIN record ON user.UserId = record.UserId WHERE user.UserId LIKE ${userId}`
    ).then(result => res.send(result));

}

function createRecord(req, res)
{
    queryConsrtuctor.createQuery(
    `INSERT INTO record (UserId, Title, Record) VALUES (${req.body.userId}, "${req.body.title}", "${req.body.record}")`
    )
    .then(result => getRecordById(result.insertId))
    .then(result => res.send(result));
}

function updateRecord(req, res)
{
    queryConsrtuctor.createQuery(
    `UPDATE record SET record.Title = '${req.body.title}', record.Record = '${req.body.record}' WHERE RecordId LIKE ${req.body.recordId}`
    )
    .then(result => getRecordById(req.body.recordId))
    .then(result => res.send(result));
    
}

function deleteRecord(req, res)
{
    queryConsrtuctor.createQuery(
    `DELETE FROM record WHERE record.RecordId = ${req.body.recordId}`
    )
    .then(result => res.send(req.body.recordId));

}

function getRecordById(_id)
{
    return queryConsrtuctor.createQuery(
    `SELECT * FROM record WHERE RecordId = ${_id}`
    );  
}


module.exports = {getUserRecords, createRecord, updateRecord, deleteRecord};