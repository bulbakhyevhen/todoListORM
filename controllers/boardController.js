const boards = require('../models/boardModel.js');
const records = require('../models/recordModel.js');

boards.hasMany(records, {foreignKey : 'boardId'});
records.belongsTo(boards, {foreignKey : 'boardId'});

function getUserBoards(req, res){

    boards.findAll({

        where : {
            userId : req.access_token.userId
        },
        order : [['position', 'ASC']],
        include : [records],

    }).then(boards => res.send(boards));

}

function createBoard(req, res){

    boards.create({

        userId : req.access_token.userId,
        boardName : req.body.boardName,
        position : req.body.position

    }).then(board => res.send(board));

}

function updateBoard(req, res){

    boards.update({

        userId : req.access_token.userId,
        boardName : req.body.boardName,
        position : req.body.position

    },{where : {boardId : req.params.id}})
    .then(boards.findByPk(req.params.id))
    .then(board => res.send(board));

}

function deleteBoard(req, res){

    boards.destroy({

        where : {boardId : req.params.id}

    }).then(records.destroy({

        where : {boardId : req.params.id}

    })).then(result => res.send(req.params.id));

}

module.exports = {getUserBoards, createBoard, updateBoard, deleteBoard};