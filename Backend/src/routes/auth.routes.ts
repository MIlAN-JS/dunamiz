import passport from "../config/passport.js";
import express from "express";
import { googleCallback } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("auth/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] })
);


authRouter.get('/auth/google/callback',passport.authenticate("google",{
    session: false,
    failureRedirect: '/'
}), googleCallback)

export default authRouter;