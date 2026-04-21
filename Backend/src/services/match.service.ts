    import matchModel from "../models/match.model.js";
import type{ IMatch } from "../models/match.model.js";


    const createMatch = async function createMatch(title:string,gameSettings:any,entryFee:number,prizePool:number,user:string): Promise<IMatch>{

        const newMatch = await matchModel.create({
            title: title,
            gameSettings: gameSettings,
            entryFee: entryFee,
            prizePool: prizePool,
            createdBy: user
        
        })

        return newMatch
    }

  


    export {createMatch}