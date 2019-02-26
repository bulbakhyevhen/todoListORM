const mysql = require('mysql');

let db = mysql.createPool
({
    connectionLimit:10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "tododb"
});

function errorHandler(_err)
{
    if(_err) throw _err;
}

function createQuery(_query)
{
    return new Promise((resolve, reject)=>
    {
        db.query(`${_query}`, function(err, result)
        {
            errorHandler(err);
            resolve(result);
        });
    });
}


module.exports = {createQuery};






