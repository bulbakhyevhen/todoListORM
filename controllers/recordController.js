const mysql = require('mysql');
const queryConsrtuctor = require('../connect.js');

function createRecord(_userId, _title, _record)
{
    queryConsrtuctor.createQuery(
    `INSERT INTO record (UserId, Title, Record) VALUES (${_userId}, "${_title}", "${_record}")`
    );
}

function updateRecord(_recordId, _title, _record)
{
    queryConsrtuctor.createQuery(
    `UPDATE record SET record.Title = '${_title}', record.Record = '${_record}' WHERE RecordId LIKE ${_recordId}`
    );
}

function deleteRecord(_recordId)
{
    queryConsrtuctor.createQuery(
    `DELETE FROM record WHERE record.RecordId = ${_recordId}`
    );
}

module.exports = {createRecord, updateRecord, deleteRecord};