import express from 'express';
import { createMatchController, getMatchController ,joinMatchController, leaveMatchController} from '../controllers/match.controller.js';

import { checkUser } from '../middlewares/auth.middleware.js';
import { match } from 'assert';
const matchRouter = express.Router();


matchRouter.post("/create-match", checkUser, createMatchController)
matchRouter.get("/get-match",getMatchController )
matchRouter.post("/join-match", checkUser , joinMatchController)
matchRouter.post("/leave-match", checkUser , leaveMatchController)
export default matchRouter; 



