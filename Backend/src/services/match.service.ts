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
        const err =   new Error("Match not found");
        throw err;
        return ;
    }

    //check if match is open for joining
    if (match.status !== "OPEN") {
        throw new Error("Match is not open for joining");
        return 
    }

    //check if user already joined the match
    const alreadyJoined = match.players.some(
        (player) => player.userId.toString() === userId
    );




    if (alreadyJoined) {
        throw new Error("User already joined");
        return ;
    }
    // check if match is full
    if (match.players.length >= 50) {
        throw new Error("Match is full");
        return ;
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

    const leaveMatch = async (matchId: string, userId: string) => {

        // check if match exists
        const match = await matchModel.findById(matchId);

        if (!match) {
            throw new Error("Match not found");
          
        }

        // check if user is part of the match 

        const isUserInMatch = match.players.some((player)=>{
            return player.userId.toString() === userId
        });

        if (!isUserInMatch) {
            throw new Error("User is not part of the match");
            
        }

        // remove the user from the match 

        match.players = match.players.filter((player)=>{
            return player.userId.toString() !== userId
        });


        // if match was full and now has a spot, update the status to OPEN
        if (match.status === "FULL" && match.players.length < 50) {
            match.status = "OPEN";
        }

        // remove the match from the user's currentMatch field
        await userModel.findByIdAndUpdate(userId, { currentMatch: null })

        return await match.save();
       
    }
    
    const startMatch = async (matchId: string , userId: string ) => {

        // check if match exists
        const match = await matchModel.findById(matchId);

        if (!match) {
            throw new Error("Match not found");
          
        }

        // check if user is the creator of the match
        if (match.createdBy.toString() !== userId) {
            throw new Error("Only the creator can start the match");
            
        }
// todo : create a new key field in match model called minPlayers and maximum players to start .
        // check if match has at least 20 or minimum   players to start
        if (match.players.length < 20) {
            throw new Error("At least 20 players are required to start the match");
        }

        // update the match status to LIVE
        match.status = "LIVE";
        return await match.save();

    };

    export {createMatch , joinMatch , leaveMatch , startMatch}