const queryConsrtuctor = require('../connect.js');

function getUserRecords(req, res)
{
        queryConsrtuctor.createQuery(
        `SELECT * FROM user INNER JOIN record ON user.userId = record.userId WHERE user.userId = ${req.access_token.userId}`
        ).then(result => res.send(result));     
}

function createRecord(req, res)
{
    queryConsrtuctor.createQuery(
    `INSERT INTO record (userId, title, record) VALUES (${req.access_token.userId}, "${req.body.title}", "${req.body.record}")`
    )
    .then(result => getRecordById(result.insertId))
    .then(result => res.send(result));

}

function updateRecord(req, res)
{
    queryConsrtuctor.createQuery(
    `UPDATE record SET record.title = '${req.body.title}', record.record = '${req.body.record}' WHERE recordId = ${req.body.recordId}`
    )
    .then(result => getRecordById(req.body.recordId))
    .then(result => res.send(result))
    
}

function deleteRecord(req, res)
{
    queryConsrtuctor.createQuery(
    `DELETE FROM record WHERE record.recordId = ${req.body.recordId}`
    )
    .then(result => res.send(req.body.recordId));

}

function getRecordById(_id)
{
    return queryConsrtuctor.createQuery(
    `SELECT * FROM record WHERE recordId = ${_id}`
    );  
}


module.exports = {getUserRecords, createRecord, updateRecord, deleteRecord};