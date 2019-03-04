const jwt = require('jsonwebtoken');
const queryConstructor = require('../connect.js');

function createAccessToken(_userId, _role, _exp)
{
    return jwt.sign({userId : _userId, role : _role, exp : _exp}, 'secret');
}

function createRefreshToken(_userId, _exp)
{
    return jwt.sign({userId: _userId, exp: _exp}, 'secret');
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

    res.send({access_token : access_token, refresh_token : refresh_token, exp_in : _exp});

}

module.exports = {createAccessToken, createRefreshToken, getExprirationDate, updateRefreshToken, sendTokenSet};