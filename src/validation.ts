import * as Joi from 'joi';

export const registerValidation = (data) => {
    const scheme = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    });
    return scheme.validate(data);
} 

export const loginValidation = (data) => {
    const scheme = Joi.object({
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(6).required()
    });
    return scheme.validate(data);

}