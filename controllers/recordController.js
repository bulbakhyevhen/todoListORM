const db = require('../models');

function createRecord(req, res){

    const {boardId} = req.params;

    db.records.create({
        
        boardId : boardId,
        userId : req.access_token.userId,
        title : req.body.title,
        record : req.body.record,
        done : false,

    }).then(record => res.send(record))
        .catch(err => {res.status(500).send(err)});

}

function updateRecord(req, res){

    const {recordId} = req.params;

    db.records.update({

        title : req.body.title,
        record : req.body.record,
        done : req.body.done,
        boardId : req.body.boardId

    },{where : {recordId : recordId}})
    .then(db.records.findByPk(recordId)
        .then(record => res.send(record)))
            .catch(err => {res.status(500).send(err)});

}

function deleteRecord(req, res){

    const {recordId} = req.params;

    db.records.destroy({

        where : {recordId : recordId}

    }).then(res.send(recordId))
        .catch(err => {res.status(500).send(err)});

}

module.exports = {createRecord, updateRecord, deleteRecord};