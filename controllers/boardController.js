const db = require('../models');

function getUserBoards(req, res){

   db.boards.findAll({

        where : {
            userId : req.access_token.userId
        },
        order : [['position', 'ASC']],
        include : [records],

    }).then(boards => res.send(boards));

}

function createBoard(req, res){

    db.boards.create({

        userId : req.access_token.userId,
        boardName : req.body.boardName,
        position : req.body.position

    }).then(board => res.send(board));

}

function updateBoard(req, res){

    db.boards.update({

        userId : req.access_token.userId,
        boardName : req.body.boardName,
        position : req.body.position

    },{where : {boardId : req.params.id}})
    .then(db.boards.findByPk(req.params.id))
    .then(board => res.send(board));

}

function deleteBoard(req, res){

    db.boards.destroy({

        where : {boardId : req.params.id}

    }).then(db.records.destroy({

        where : {boardId : req.params.id}

    })).then(res.send(req.params.id));

}

module.exports = {getUserBoards, createBoard, updateBoard, deleteBoard};