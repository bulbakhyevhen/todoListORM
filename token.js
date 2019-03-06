const jwt = require('jsonwebtoken');
const queryConstructor = require('./connect.js');
const key = require('./key.js');

function createAccessToken(_userId, _role, _exp)
{
    return jwt.sign({userId : _userId, role : _role, exp : _exp}, key);
}

function createRefreshToken(_userId, _exp)
{
    return jwt.sign({userId: _userId, exp: _exp}, key);
}

function getExprirationDate(minutes)
{
    return Math.floor(Date.now() / 1000) + (minutes * 60);
}

function updateRefreshToken(userId, refresh_token)
{
    queryConstructor.createQuery(`UPDATE user SET refresh_token = "${refresh_token}" WHERE userId = ${userId}`);
}

function sendTokenSet(req, res, _userId, _role, _exp)
{
    let access_token = createAccessToken(_userId, _role, getExprirationDate(10));
    let refresh_token = createRefreshToken(_userId, getExprirationDate(60));

    updateRefreshToken(_userId, refresh_token);

    return {access_token : access_token, refresh_token : refresh_token, exp_in : _exp};

}

function verifyToken(token, key)
{
    try 
    {
        return jwt.decode(token, key);   
    } 
    catch (error) 
    {
        res.send(error);    
    }
}


module.exports = {createAccessToken, createRefreshToken, getExprirationDate, updateRefreshToken, sendTokenSet, verifyToken};