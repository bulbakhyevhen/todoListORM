const express = require('express');
const records = require('../models/recordModel.js');
const recordRouter = express.Router();

recordRouter.get('/:userId', records.getUserRecords);
recordRouter.post('/:userId', records.createRecord);
recordRouter.put('/:userId', records.updateRecord);
recordRouter.delete('/:userId', records.deleteRecord);

module.exports = recordRouter;