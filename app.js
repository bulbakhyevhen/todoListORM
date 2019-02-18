const express = require("express");
const app = express();
const user = require('/Node/TodoList/controllers/userController.js');
const record = require('/Node/TodoList/controllers/recordController.js');
const jsonParser = express.json();

app.set("view engine", "ejs");
app.set("views", __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use("/singin", function(request, response)
{
    response.render(__dirname + "/singin.ejs");
});

app.get("/index/:userId", function(request, response)
{
    let userId = request.params["userId"];
    user.getUserRecords(userId, function(_records)
    {
        response.render("index.ejs", {records: _records});
    });
});

app.post("/index/:userId", jsonParser, function(request, response)
{
   record.addRecord(request.body.UserId, request.body.Title, request.body.Record);
   console.log(request.body);
   response.send(request.body);
});

app.delete("/index/:userId", jsonParser, function(request, response)
{
    record.deleteRecord(request.body.id);
});

app.put("/index/:userId", jsonParser, function(request, response)
{
    record.editRecord(request.body.RecordId, request.body.Title, request.body.Content);
    response.send(request.body);
});

app.listen(3000);
