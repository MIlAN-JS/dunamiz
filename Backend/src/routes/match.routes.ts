import express from 'express';
import { createMatchController, getMatchController } from '../controllers/match.controller.js';
import { match } from 'assert';

const matchRouter = express.Router();


matchRouter.post("/create-match",createMatchController)
matchRouter.get("/get-match",getMatchController )

export default matchRouter; 



