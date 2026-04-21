import matchModel from "../models/match.model.js";
import type{ IMatch } from "../models/match.model.js";
import mongoose from "mongoose";
import userModel from "../models/user.model.js";

    const createMatch = async function createMatch(title:string,gameSettings:any,entryFee:number,prizePool:number,user:string): Promise<IMatch>{

        const newMatch = await matchModel.create({
            title: title,
            gameSettings: gameSettings,
            entryFee: entryFee,
            prizePool: prizePool,
            createdBy: new mongoose.Types.ObjectId(user),
        
        })

        return newMatch
    }


 const joinMatch = async (matchId: string, userId: string) => {

  const match = await matchModel.findById(matchId);
  
  //check if match exists
  if (!match) {
    throw new Error("Match not found");
  }
//check if match is open for joining
  if (match.status !== "OPEN") {
    throw new Error("Match is not open for joining");
  }
//check if user already joined the match
  const alreadyJoined = match.players.some(
    (player) => player.userId.toString() === userId
  );



  if (alreadyJoined) {
    throw new Error("User already joined");
  }
// check if match is full
  if (match.players.length >= 50) {
    throw new Error("Match is full");
  }

  //add the match to the user's currentMatch field
   await userModel.findByIdAndUpdate(userId, { currentMatch: match._id })
 
  // add user to the match
  match.players.push({
    userId,
    joinedAt: new Date()
  });


  // if match is full after adding the user, update the status to FULL
  if (match.players.length >= 50) {
    match.status = "FULL";
  }

  return await match.save();

};

  


    export {createMatch , joinMatch}