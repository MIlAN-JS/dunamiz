import passport from "../config/passport.js";
import express from "express";
import {  googleCallbackController, registerUser, getUserController } from "../controllers/auth.controller.js";
import { checkUser } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();


authRouter.post("/register", registerUser);



// Google OAuth routes
authRouter.get("/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] })
);

authRouter.get('/google/callback',passport.authenticate("google",{
    session: false,
    failureRedirect: '/'
}), googleCallbackController)

authRouter.get("/get-user", checkUser,  getUserController)

export default authRouter;