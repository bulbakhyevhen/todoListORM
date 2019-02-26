const masterRouter = require('../TodoList/masterRouter.js');
const express = require("express");
const app = express();

app.use(express.json());
masterRouter(app);
app.listen(3000);
