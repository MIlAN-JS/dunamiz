import mongoose from "mongoose";


interface IUser {
    email: string,
    password: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    currentMatch : mongoose.Types.ObjectId | null

}

const userSchema = new mongoose.Schema<IUser>({

    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    name : {type : String, required : true},
    currentMatch : {type : mongoose.Schema.Types.ObjectId, ref : "matchModel", default : null}

}, {timestamps: true, strict: false});


const userModel = mongoose.model<IUser>("User", userSchema)

export default userModel;