import * as userModel from '../models/userModel.js';
import ValidationError from '../utils/ValidationError.js'; 
import validator from 'validator';
import bcrypt from 'bcryptjs';

const doesUserExist = async (user) => {
    const existing = await userModel.findUserByEmail(user.email);
    console.log(existing[0]);
    if(existing.length > 0){
        return { result: true, user: existing[0]};
    }

      return { result: false, user: undefined};
}

export const createAccount = async(user) => {
    if(!user.name || !user.email || !user.password){
        throw new ValidationError('Name, email, and password are required!', 400);
    }

    if(!validator.isEmail(user.email)){
        throw new ValidationError('Improper email format.', 400);
    }

    if(!validator.isStrongPassword(user.password)){
        throw new ValidationError('Password is not strong enough.', 400);
    }


    const existing = await doesUserExist(user)

    if(existing.result){
        throw new ValidationError('An account with that email already exists.', 400);
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);

    const userId = await userModel.insert(user.name, user.email, hashedPassword);

    if(!userId || userId <= 0){
        throw new Error('Unavailable to create account. Please try again later.');
    }
    return 'Account created successfully!';
}

export const login = async(user) => {
    if( !user.email || !user.password){
        throw new ValidationError('Email and password are required!', 400);
    }

    const existing = await doesUserExist(user);

    if(!existing.result){
        throw new ValidationError('An account with that email does not exist.', 400);
    }

    const isCorrectPassword = await bcrypt.compare(user.password, existing.user.password);
    if(!isCorrectPassword){
        throw new ValidationError('Incorrect password.', 400);
    }

    return 'Login successfully!';
}