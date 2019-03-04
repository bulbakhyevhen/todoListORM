const express = require('express');
const records = require('../models/recordModel.js');
const recordRouter = express.Router();
const jwt = require('jsonwebtoken');

recordRouter.use('/', (req, res, next) =>
{
    if(typeof(req.headers.access_token) !== 'undefined'){
    var token = jwt.decode(req.headers.access_token, 'secret');
    req.access_token = token;
    next();
    }
    else
    {
        res.sendStatus(403);
    }
});
recordRouter.get('/', records.getUserRecords);
recordRouter.post('/', records.createRecord);
recordRouter.put('/', records.updateRecord);
recordRouter.delete('/', records.deleteRecord);

module.exports = recordRouter;