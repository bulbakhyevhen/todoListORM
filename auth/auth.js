const queryConstructor = require('../connect.js');
const Token = require('../token.js');
const users = require('../models/userModel.js');

function signUp(req, res)
{
    queryConstructor.createQuery(
    `INSERT INTO
     user (userId, userName, email, password)
     VALUES (${req.body.userId}, "${req.body.userName}", "${req.body.email}", "${req.body.password}")`
    )
    .then(result => users.getUserbyId(result.insertId))
    .then(result => res.send(result));
}

function signIn(req, res)
{
    queryConstructor.createQuery(
    `SELECT userId, email, password FROM user WHERE email = "${req.body.email}" AND password = "${req.body.password}"`
    ).then(result => 
         {
            if(result.length == 0) 
            {
                res.send('Could not recognize email/pass set');
            }
            else 
            { 
                var token = new Token(result[0].userId, result[0].email);

                queryConstructor.createQuery(
                `UPDATE user SET refresh_token = "${token.refreshToken}" WHERE userId = ${result[0].userId}`
                ).then(result => res.send({"access_token": token.accessToken, "refresh_token": token.refreshToken, "exp_in": new Date().setMinutes(10)} ));    
            }
        });
}

function checkRefreshToken(req, res)
{
    let _token = req.headers.refresh_token;
    let _decodedToken = DecodeToken(_token);
 
    let token = new Token(_decodedToken.userId, _decodedToken.iis, new Date().setMinutes(10));

    token.reSignTokens(req, res, _token, _decodedToken);
}

function DecodeToken(token)
{
    value = Buffer.from(`${token.split('.')[1]}`, 'base64').toString();

    return JSON.parse(value);
}


module.exports = {signUp, signIn, checkRefreshToken};