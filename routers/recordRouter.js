const express = require('express');
const records = require('../controllers').record;
const recordRouter = express.Router();

recordRouter.post('/:boardId', records.createRecord);
recordRouter.put('/:recordId', records.updateRecord);
recordRouter.delete('/:recordId', records.deleteRecord);

module.exports = recordRouter;