import type { Profile } from "passport";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import config from "../config/config.js";
import id from "zod/v4/locales/id.js";
import userModel from "../models/user.model.js";
import type { IMatch } from "../models/match.model.js";
import type { mongo } from "mongoose";


const findOrCreateUser = async(userData: Profile): Promise<any> => {
    
    // receiving data from user

    const {id , displayName , name , emails , photos} = userData

    // checking if user already exists in the database

    const user = await userModel.findOne({
        $or : [
            {googleId : id},
            ...(emails?.[0]?.value ? [{ email: emails[0].value }] : [])
        ]
    })

    if(user){
        return user
    }

    // convert name object into fullName string
      const fullName = name ? `${name.givenName} ${name.familyName}` : displayName
    // checking if email exists
        const email = emails?.[0]?.value;
    // if user does not exist, create a new user in the database

    const newUser = await userModel.create({
        name : fullName,
        googleId : id, 
        ...(email &&{email})
    })

    return newUser

}

const createToken = (user :any) : string=>{
    
        const token:string = jwt.sign({id :user._id} , config.JWT_SECRET, {expiresIn : "1d"})
        return token
        
    
}
const getUserService = async (userId: mongo.ObjectId): Promise<any> => {
    return await userModel.findById(userId)
}


export{
    findOrCreateUser,
    createToken,
    getUserService
}