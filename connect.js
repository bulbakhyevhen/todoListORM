const mysql = require('mysql');

let pool = mysql.createPool
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
    let promise = new Promise((resolve, reject)=>
    {
        pool.getConnection((err, connection)=>
        {
            errorHandler(err);
            connection.query(`${_query}`, (err, result) =>
            {
                errorHandler(err); 
                resolve(result);
                connection.release();
            }); 
        });
    });

    return promise;
}

module.exports = {createQuery};






