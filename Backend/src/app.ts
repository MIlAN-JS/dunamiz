import express from "express"
import errorHandler from "./middlewares/handleError.middleware.js";
import asyncHandler from "./utils/asyncHandler.js";
import { nextTick } from "process";
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/test" , asyncHandler(async(req:any , res:any , next:any)=>{
    
const err:any =  new Error("This is a test error")
     err.status= 200
throw err


})) 





app.use(errorHandler)
export default app;