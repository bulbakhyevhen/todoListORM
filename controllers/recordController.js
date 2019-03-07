const records = require('../models/recordModel');

function getRecords(req, res){

    records.findAll({where : {userId : req.access_token.userId}}).then(record => res.send(record));
}

function createRecord(req, res){

    records.create({
        
        userId : req.access_token.userId,
        title : req.body.title,
        record : req.body.record,
        done : false

    }).then(record => res.send(record));

}

function updateRecord(req, res){

    records.update({
        title : req.body.title,
        record : req.body.record,
        done : req.body.done
    },{where : {recordId : req.body.recordId}})
    .then(records.findByPk(req.body.recordId)
    .then(record => res.send(record)));

}

function deleteRecord(req, res){

    records.destroy({

        where : {recordId : req.body.recordId}

    }).then(record => res.send(req.body.recordId));

}

module.exports = {getRecords, createRecord, updateRecord, deleteRecord};