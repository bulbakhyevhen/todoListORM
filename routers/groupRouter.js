const express = require('express');
const groupController = require('../controllers/userGroupController.js');
const groupRouter = express.Router();

groupRouter.get('/', groupController.getUserGroups);
groupRouter.get('/one', groupController.getUserGroup);
groupRouter.post('/one', groupController.createGroup);
groupRouter.put('/one', groupController.editGroup);
groupRouter.delete('/one', groupController.deleteGroup);

module.exports = groupRouter;