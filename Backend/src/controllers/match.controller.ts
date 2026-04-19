import matchModel from "../models/match.model.js";
import asyncHandler from "../utils/asyncHandler.js";


const createMatchController = asyncHandler(async(req:any , res:any )=>{

    // Extracting data from the request body
    const {title,gameSettings,entryFee,prizePool,createdBy } = req.body;


    //storing the data in the database
    const newMatch = await matchModel.create({
        title: title,
        gameSettings: gameSettings,
        entryFee: entryFee,
        prizePool: prizePool,
        createdBy: createdBy
    })
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
    const matches = await matchModel.find(filter)

    // responding to the client

    res.status(200).json({
        success: true,
        message: "Matches fetched successfully",
        data: matches
    })
    


})



export {createMatchController , getMatchController}