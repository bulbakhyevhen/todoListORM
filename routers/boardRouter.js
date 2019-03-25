const express = require('express');
const boards = require('../controllers').board;
const boardRouter = express.Router();

boardRouter.get('/', boards.getUserBoards);
boardRouter.post('/', boards.createBoard);
boardRouter.put('/:boardId', boards.updateBoard);
boardRouter.delete('/:boardId', boards.deleteBoard);

module.exports = boardRouter;