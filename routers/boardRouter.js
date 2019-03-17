const express = require('express');
const boardController = require('../controllers/boardController.js');
const boardRouter = express.Router();

boardRouter.get('/', boardController.getUserBoards);
boardRouter.post('/', boardController.createBoard);
boardRouter.put('/:boardId', boardController.updateBoard);
boardRouter.delete('/:boardId', boardController.deleteBoard);

module.exports = boardRouter;