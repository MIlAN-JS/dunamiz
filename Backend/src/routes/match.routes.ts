import express from 'express';
import { createMatchController, getMatchController ,joinMatchController, leaveMatchController, startMatchController, updateMatchController} from '../controllers/match.controller.js';

import { checkUser } from '../middlewares/auth.middleware.js';
import { match } from 'assert';
import { startMatch } from '../services/match.service.js';
const matchRouter = express.Router();


matchRouter.post("/create-match", checkUser, createMatchController)
matchRouter.get("/get-match",getMatchController )
matchRouter.post("/join-match", checkUser , joinMatchController)
matchRouter.post("/leave-match", checkUser , leaveMatchController)
matchRouter.post("/start-match", checkUser , startMatchController)
matchRouter.patch("/update-match", checkUser , updateMatchController)

export default matchRouter; 



