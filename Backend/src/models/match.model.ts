import mongoose, { type ObjectId } from "mongoose";
import z from "zod";


export interface IMatch {

    title : string,
    gameSettings :{
        gunAttributes: boolean,
        esportsMode: boolean,
        defaultLook: boolean,
        characterSkill: boolean,
        limitedAmmo: boolean,
        gun: string,
        grenade: boolean,
        map: string,
        gameType: string
    },
    entryFee : number,
    prizePool : number,
    players : {
        userId : string,
        joinedAt : Date
    }[],
    room : {
        roomId : string,
        password : string
    },
    createdBy : mongoose.Types.ObjectId | string, 
    createdAt :  Date,
    updatedAt :  Date,
    status: "OPEN" | "FULL" | "LIVE" | "COMPLETED",
    

   







}   

//create a schema for the match model
const matchSchema = new mongoose.Schema<IMatch>({
    title : {type : String, required : true},

    gameSettings :{
        gunAttributes: {type : Boolean, required : true},
        esportsMode: {type : Boolean, required : true},
        defaultLook: {type : Boolean, required : true},
        characterSkill: {type : Boolean, required : true},
        limitedAmmo: {type : Boolean, required : true},
        gun: {type : String, required : true},
        grenade: {type : Boolean, required : true},
        map: {type : String, required : true},
        gameType: {type : String, required : true}

    },
    entryFee : {type : Number, required : true, min: 0 , max: 500},
    prizePool : {type : Number, required : true , min:50},
    players :  [{
    userId : {type : String, required : true },
    joinedAt : {type : Date, default : Date.now}
    }],
    room : {
        roomId : {type : String},
        password : {type : String}
    },
    status: {
        type:String, 
        enum : ["OPEN", "FULL", "LIVE", "COMPLETED"],
        default : "OPEN"
    },

    createdBy :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    }
   

}, {timestamps : true})


const matchModel = mongoose.model<IMatch>("match", matchSchema);

export default matchModel;