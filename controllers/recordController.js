const records = require('../models/recordModel');

function createRecord(req, res){

    records.create({
        
        userId : req.access_token.userId,
        title : req.body.title,
        record : req.body.record,
        done : false,
        boardId : req.body.boardId

    }).then(record => res.send(record));

}

function updateRecord(req, res){

    records.update({

        title : req.body.title,
        record : req.body.record,
        done : req.body.done,
        boardId : req.body.boardId

    },{where : {recordId : req.params.id}})
    .then(records.findByPk(req.params.id)
    .then(record => res.send(record)));

}

function deleteRecord(req, res){

    records.destroy({

        where : {recordId : req.params.id}

    }).then(res.send(req.params.id));

}

module.exports = {createRecord, updateRecord, deleteRecord};