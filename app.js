const express = require("express");
const app = express();
const users = require('/Node/TodoList/controllers/userController.js');
const records = require('/Node/TodoList/controllers/recordController.js');
const jsonParser = express.json();

app.set("view engine", "ejs");
app.set("views", __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use("/singin", (request, response) =>
{
    response.render(__dirname + "/singin.ejs");
});

app.get("/index/:userId", (request, response) => 
{
    let userId = request.params["userId"];
    let user = users.getUserRecords(userId);

    user.then(result => response.render("index.ejs", {records: result}));
});

app.post("/index/:userId", jsonParser, (request, response) =>
{
    records.createRecord(request.body.UserId, request.body.Title, request.body.Record);

    response.send(request.body);
});

app.delete("/index/:userId", jsonParser, (request, response) =>
{
    records.deleteRecord(request.body.id);
});

app.put("/index/:userId", jsonParser, (request, response) =>
{
    records.updateRecord(request.body.RecordId, request.body.Title, request.body.Content);

    response.send(request.body);
});

app.listen(3000);
