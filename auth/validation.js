const Joi = require('joi');

const schema = Joi.object().keys({

    id : Joi.number().integer().min(1),
    boardId : Joi.number().integer().min(1),
    userName : Joi.string().alphanum().min(1).max(45),
    email : Joi.string().email({minDomainAtoms: 2}),
    password : Joi.string().min(32).max(32),
    boardName : Joi.string().min(1).max(45),
    title : Joi.string().min(1).max(45),
    record : Joi.string().min(0).max(500),
    done : Joi.bool(),
    position : Joi.number().integer().min(1),
    groupName : Joi.string().min(1).max(50),
    groupDescription : Joi.string().min(1).max(100)

});

function validateRequest(req, res, next){

    var result = Joi.validate(req.body, schema);

    if(result.error == null){
        next();
    }
    else { 
        res.send(result.error.message);
    }
    
}

module.exports = validateRequest;