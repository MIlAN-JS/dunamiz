import matchModel from "../models/match.model.js";
import { createMatch, joinMatch } from "../services/match.service.js";
import asyncHandler from "../utils/asyncHandler.js";


const createMatchController = asyncHandler(async(req:any , res:any )=>{

    // Extracting data from the request body
    const {title,gameSettings,entryFee,prizePool } = req.body;
    

    const user:string = req.user.id

   
    //storing the data in the database
    const newMatch = await createMatch(title,gameSettings,entryFee,prizePool,user)
    
    console.log(newMatch)  



    // responding to the client

    res.status(201).json({
        success: true,
        message: "Match created successfully",
        data: newMatch
    })

})

const getMatchController = asyncHandler(async(req:any , res:any )=>{

    // extracting query from parameters
    interface query{
    status : string | undefined
    }

   const {status}: query = req.query

    const filter : any = {}
    

    if(status){
        filter.status = status
    }

    // fetch all the matches from database based on the filter
    const matches = await matchModel.find(filter).populate("createdBy" , "email name")

    // responding to the client

    res.status(200).json({
        success: true,
        message: "Matches fetched successfully",
        data: matches
    })
    


})

const joinMatchController = asyncHandler(async(req:any , res:any )=>{

    const {matchId} = req.body
    const userId = req.user.id
    
    const match = await joinMatch(matchId,userId)

    res.status(200).json({
        success: true,
        message: "User joined the match successfully",
        data: match
    })

})

export {createMatchController , getMatchController , joinMatchController}