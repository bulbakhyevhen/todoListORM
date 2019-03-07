const users = require('../models/userModel.js');
const token = require('../token.js');

function Authentification(req, res){

    users.findOne({
        where : {email : req.body.email, password : req.body.password}
        }).then(user => {
        
        if(user.length !== 0){

            let tokens = token.createTokenSet(user.userId, user.userName, Date.now());
            updateRefreshToken(tokens.refresh_token);

            res.send(tokens);
        }
        else {
            res.sendStatus(401);
        }
   });

}

function updateRefreshToken(userId, refresh_token)
{
    users.update({
        refresh_token : refresh_token
    },{where : {userId : userId}});
}

function reSignTokens(req, res)
{
    var request_token = req.headers.refresh_token;
    var decoded_token = token.verifyToken(request_token);

    users.findOne({

        where : {refresh_token : decoded_token.userId}

    }).then(user => {

        if(request_token == result.refresh_token){
            
            let tokens = token.createTokenSet(user.userId, user.userName, Date.now());

            res.send(tokens);
        }
        else {

            res.sendStatus(406);

        }

    });
}

module.exports = {Authentification, reSignTokens};