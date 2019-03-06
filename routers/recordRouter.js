const express = require('express');
const records = require('../models/recordModel.js');
const recordRouter = express.Router();

recordRouter.get('/', records.getUserRecords);
recordRouter.post('/', records.createRecord);
recordRouter.put('/', records.updateRecord);
recordRouter.delete('/', records.deleteRecord);

module.exports = recordRouter;