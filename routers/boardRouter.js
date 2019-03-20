const express = require('express');
const controllers = require('../controllers');
const boardRouter = express.Router();

boardRouter.get('/', controllers.board.getUserBoards);
boardRouter.post('/', controllers.board.createBoard);
boardRouter.put('/:boardId', controllers.board.updateBoard);
boardRouter.delete('/:boardId', controllers.board.deleteBoard);

module.exports = boardRouter;