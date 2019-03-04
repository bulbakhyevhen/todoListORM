const masterRouter = require('../TodoList/masterRouter.js');
const token = require('../TodoList/auth/token.js');
const express = require("express");
const app = express();

app.use(express.json());

masterRouter(app);

app.listen(3000);

