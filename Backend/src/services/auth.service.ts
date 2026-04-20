import type { Profile } from "passport";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import config from "../config/config.js";
import id from "zod/v4/locales/id.js";


const findOrCreateUser = async(profile: Profile) => {
    // Implement logic to find or create a user in your database based on the profile information



    // For example, you can use the profile.id to check if the user already exists in your database
    // If the user exists, return the user object
    // If the user does not exist, create a new user in your database and return the new user object
}

const createToken = (user :any) : string=>{
    
        const token:string = jwt.sign({id :user._id} , config.JWT_SECRET, {expiresIn : "1d"})
        return token
        
    
}


export{
    findOrCreateUser,
    createToken
}