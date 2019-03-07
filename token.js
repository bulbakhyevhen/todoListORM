const jwt = require('jsonwebtoken');
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

function createTokenSet(userId, role, exp)
{
    let access_token = createAccessToken(userId, role, getExprirationDate(10));
    let refresh_token = createRefreshToken(userId, getExprirationDate(60));


    return {access_token : access_token, refresh_token : refresh_token, exp_in : exp};
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


module.exports = {createAccessToken, createRefreshToken, getExprirationDate, createTokenSet, verifyToken};