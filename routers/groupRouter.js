const express = require('express');
const controllers = require('../controllers');
const groupRouter = express.Router();

groupRouter.get('/', controllers.userGroups.getUserGroups);
groupRouter.get('/:id', controllers.userGroups.getUserGroup);
groupRouter.post('/', controllers.userGroups.createGroup);
groupRouter.put('/:id', controllers.userGroups.updateGroup);
groupRouter.delete('/:id', controllers.userGroups.deleteGroup);
groupRouter.post('/members/:id', controllers.userGroups.leaveGroup);
groupRouter.post('/members', controllers.userGroups.addUser);

module.exports = groupRouter;