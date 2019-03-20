const userGroups = require('./userGroupsController.js');
const user = require('./userController.js');
const board = require('./boardController.js');
const record = require('./recordController.js');
const auth = require('./authController.js');

module.exports = {userGroups, user, board, record, auth};