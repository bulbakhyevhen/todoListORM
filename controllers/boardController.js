const db = require('../models');

function getUserBoards(req, res){

   db.boards.findAll({

        where : {
            userId : req.access_token.userId
        },
        order : [['position', 'ASC']],
        include : [db.records],

    }).then(boards => res.send(boards))
        .catch(err => {res.status(500).send(err)});

}

function createBoard(req, res){

    db.boards.create({

        userId : req.access_token.userId,
        boardName : req.body.boardName,
        position : req.body.position

    }).then(board => res.send(board))
        .catch(err => {res.status(500).send(err)});

}

function updateBoard(req, res){

    const {boardId} = req.params;

    db.boards.update({

        userId : req.access_token.userId,
        boardName : req.body.boardName,
        position : req.body.position

    },{where : {boardId : boardId}})
    .then(() => { return db.boards.findByPk(boardId) })
        .then(board => res.send(board))
            .catch(err => {res.status(500).send(err)});

}

function deleteBoard(req, res){

    const {boardId} = req.params;

    db.boards.destroy({

        where : {boardId : boardId}

    }).then(db.records.destroy({

        where : {boardId : boardId}

    })).then(res.send(boardId))
        .catch(err => {res.status(500).send(err)});

}

module.exports = {getUserBoards, createBoard, updateBoard, deleteBoard};