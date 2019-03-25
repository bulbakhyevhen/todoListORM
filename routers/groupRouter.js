const express = require('express');
const groups = require('../controllers').userGroups;
const groupRouter = express.Router();

groupRouter.get('/', groups.getUserGroups);
groupRouter.get('/:id', groups.getUserGroup);
groupRouter.post('/', groups.createGroup);
groupRouter.put('/:id', groups.updateGroup);
groupRouter.delete('/:id', groups.deleteGroup);
groupRouter.post('/members/:id', groups.leaveGroup);
groupRouter.post('/members', groups.addUser);

module.exports = groupRouter;