import express from "express"
import errorHandler from "./middlewares/handleError.middleware.js";
import asyncHandler from "./utils/asyncHandler.js";
import { nextTick } from "process";
import { match } from "assert";
import cookieParser from "cookie-parser";
import matchRouter from "./routes/match.routes.js";
import authRouter from "./routes/auth.routes.js";
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// match routes
app.use("/api/match", matchRouter)
app.use("/auth",authRouter )



app.use(errorHandler)
export default app;