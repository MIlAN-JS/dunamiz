import type{ Request , Response } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import userModel from "../models/user.model.js";
import { createToken, getUserService } from "../services/auth.service.js";
import { findOrCreateUser } from "../services/auth.service.js";
import type { Profile } from "passport-google-oauth20";
import { success } from "zod";
import type { mongo } from "mongoose";


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

const googleCallbackController = asyncHandler(async(req: Request, res: Response) => {

    const userData = req.user

    if(!userData){
       return  res.redirect("http://localhost:5173/login")
    }

    const user = await findOrCreateUser(userData as Profile)

    const token = createToken(user)

     res.cookie("token", token, {
    httpOnly: true,
    secure: false, // todo : set true in production
    sameSite: "lax",
  });

    return res.redirect("http://localhost:5173/match-feed")

    
})
const getUserController = asyncHandler(async (req: any, res: Response) => {

  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const user = await getUserService(userId);

  res.status(200).json({
    message: "user found successfully",
    user,
    success: true,
  });
});


export {
    googleCallbackController, 
    registerUser, 
    getUserController
}