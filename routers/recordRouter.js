const express = require('express');
const recordController = require('../controllers/recordController');
const recordRouter = express.Router();

recordRouter.post('/', recordController.createRecord);
recordRouter.put('/:recordId', recordController.updateRecord);
recordRouter.delete('/:recordId', recordController.deleteRecord);

module.exports = recordRouter;