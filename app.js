const Routers = require('./routers');
const express = require("express");
const app = express();

app.use(express.json());

Routers(app);
app.listen(3000);

