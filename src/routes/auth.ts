import { Router } from 'express';
import { registerValidation, loginValidation } from '../validation';
import { genSalt, hash, compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares';

export const AuthRouter = Router();

AuthRouter.post('/register', async (req, res) => {
    
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
   // checking if the user is already in the database 
   
   //Hash passwords
    const salt = await genSalt(10);
    const hashPassword =  await hash(req.body.password, salt);

   // create user
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    }
    try {
        // add user to DB
        res.send(200);
    } catch (err) {
        res.status(400).send(err);
    }
})

AuthRouter.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

        // checking if the email exists
        // const emailExist = 
        // if (!user) return res.status(400).send('Email or password is wrong');
        const user = { id: 1, password: '' };

        //PASSWORD is CORRECT
        const validPass = await compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Invalid password');

        //Create and assign a token
        const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send(token);
})