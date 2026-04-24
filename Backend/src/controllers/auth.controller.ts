import type{ Request , Response } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import userModel from "../models/user.model.js";
import { createToken } from "../services/auth.service.js";



const registerUser = asyncHandler(async(req: Request, res: Response) => {
    // Implement user registration logic here
    
    // receive user data from the request body
    const {email , password,name} = req.body
    
    //check if user already exists in the database

    const user: any =await userModel.findOne({email});

    if(user){
        res.status(400).json({message : "User already exists"})
        return;
    }

    // if user does not exist, create a new user in the database

    const newUser = await userModel.create({
        email,
        password,
        name
    })

    // create a token 
    const token = createToken(newUser)


    // set the token in cookie

    res.cookie("token", token)

    // return a success response


    res.status(201).json({ message: "User registration successful" , user : newUser})
})









const googleCallback = (req: Request, res: Response) => {
    console.log(req.user)

    

    res.json({
        message: "Google authentication successful",
        user: req.user
    })
}


export {
    googleCallback, 
    registerUser
}