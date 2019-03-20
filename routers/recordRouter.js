const express = require('express');
const controllers = require('../controllers');
const recordRouter = express.Router();

recordRouter.post('/', controllers.record.createRecord);
recordRouter.put('/:recordId', controllers.record.updateRecord);
recordRouter.delete('/:recordId', controllers.record.deleteRecord);

module.exports = recordRouter;