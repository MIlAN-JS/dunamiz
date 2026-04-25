import passport from "../config/passport.js";
import express from "express";
import {  googleCallbackController, registerUser } from "../controllers/auth.controller.js";

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

export default authRouter;