const express = require('express');
const recordController = require('../controllers/recordController');
const recordRouter = express.Router();

recordRouter.get('/', recordController.getRecords);
recordRouter.post('/', recordController.createRecord);
recordRouter.put('/', recordController.updateRecord);
recordRouter.delete('/', recordController.deleteRecord);

module.exports = recordRouter;