const express = require('express');
const app = express();
app.use(express.json());

app.post('/record/:id' , (req, res) => {

    var recordId = req.params.id; 

    console.log(recordId);

    res.send(recordId);
});

app.listen(5000);