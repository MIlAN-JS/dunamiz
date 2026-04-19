import express from "express"
import errorHandler from "./middlewares/handleError.middleware.js";
import asyncHandler from "./utils/asyncHandler.js";
import { nextTick } from "process";
import { match } from "assert";
import matchRouter from "./routes/match.routes.js";
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

// match routes
app.use("/api/match", matchRouter)






app.use(errorHandler)
export default app;