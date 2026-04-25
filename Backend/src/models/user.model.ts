import mongoose from "mongoose";


interface IUser {
    email: string,
    password: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    currentMatch : mongoose.Types.ObjectId | null, 
    googleId : string

}

const userSchema = new mongoose.Schema<IUser>({

    email : {type : String, required : true, unique : true},
    password : {type : String, },
    name : {type : String, required : true},
    currentMatch : {type : mongoose.Schema.Types.ObjectId, ref : "matchModel", default : null},
    googleId : {type : String , unique: true,
    }

}, {timestamps: true, strict: false});


const userModel = mongoose.model<IUser>("User", userSchema)

export default userModel;