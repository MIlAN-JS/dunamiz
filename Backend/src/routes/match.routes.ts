import express from 'express';
import { createMatchController, getMatchController } from '../controllers/match.controller.js';

import { checkUser } from '../middlewares/auth.middleware.js';
const matchRouter = express.Router();


matchRouter.post("/create-match", checkUser, createMatchController)
matchRouter.get("/get-match",getMatchController )

export default matchRouter; 



