const crypto = require('crypto');
const queryCounstructor = require('../TodoList/connect.js');
const users = require('../TodoList/models/userModel.js');

class Token 
{

    constructor(userId, iis, exp)
    {
        this.header = this.createHeader("HS256", "JWT");
        this.access_payload = this.createAccessPayLoad(userId, iis, exp);
        this.refresh_payload = this.createRefreshPayLoad(userId, exp);
        this.access_signature = this.createSignature(this.header, this.access_payload);
        this.refresh_signature = this.createSignature(this.header, this.refresh_payload);
        this.accessToken = this.createAccessToken(this.header, this.access_payload, this.access_signature);
        this.refreshToken = this.createRefreshToken(this.header, this.refresh_payload, this.access_signature);
    }
    updateRefreshToken(token, userId)
    {
        queryCounstructor.createQuery(`UPDATE user SET refresh_token = "${token}" WHERE userId = ${userId}`);
    }
    reSignTokens(req, res, token, decodedToken)
    {
            users.getUserbyId(decodedToken.userId).then(result => 
            {
                if(token == result[0].refresh_token)
                {
                    this.updateRefreshToken(this.refreshToken, result[0].userId);
                    res.send({"access_token" : this.accessToken, "refresh_token" : this.refreshToken, "exp": new Date().setMinutes(10)});
                }
                else
                {
                    res.sendStatus(403);
                }
            });
    }
    base64Encode(value)
    {
        return Buffer.from(`${value}`).toString('base64');
    }

    sha256Encode(value)
    {
        return crypto.createHmac('sha256', '3c6e0b8a9c15224a8228b9a98ca1531d')
                     .update(`${value}`)
                     .digest('base64');
    }

    createHeader(alg, typ)
    {    
        return JSON.stringify({alg, typ});
    }

    createAccessPayLoad(userId, iss, exp)
    {
        return JSON.stringify({userId, iss, exp});
    }
    createRefreshPayLoad(userId)
    {
        return JSON.stringify({userId});
    }

    createSignature(header, payload, unSignedToken)
    { 
        unSignedToken = this.base64Encode(header) + '.' + this.base64Encode(payload);
 
        return  this.sha256Encode(unSignedToken);
    }    

    createAccessToken(header,  payload, signature)
    {
        return this.base64Encode(header) + '.' + 
               this.base64Encode(payload) + '.' + 
               this.base64Encode(signature); 
    }

    createRefreshToken(header, payload, signature)
    {
        return this.base64Encode(header) + '.' +
               this.base64Encode(payload) + '.' +
               this.base64Encode(signature);
    }

}



module.exports = Token;