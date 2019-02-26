const crypto = require('crypto');

class Token 
{

    constructor(userId, name, exp)
    {
        this.header = this.createHeader("sha256", "JWT");
        this.payload = this.createPayLoad(userId, name, exp);
        this.signature = this.createSignature(this.header, this.payload);
        this.accessToken = this.createAccessToken(this.header, this.payload, this.signature);

        console.log(this.signature);
    }
    base64Encode(value)
    {
        return Buffer.from(`${value}`).toString('base64');
    }

    sha256Encode(value)
    {
        return crypto.createHmac('sha256', `${value}`).digest('base64');
    }

    createHeader(alg, typ)
    {    
        return JSON.stringify({alg, typ});
    }

    createPayLoad(userId, name, exp)
    {
        return JSON.stringify({userId, name, exp});
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

    createRefreshToken()
    {
        //not implemented yet;
    };

}

var token = new Token(2, 'admin', 305544503);
console.log(token.accessToken);