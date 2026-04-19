import express from 'express';
import { createMatchController } from '../controllers/match.controller.js';

const matchRouter = express.Router();


matchRouter.post("/create-match",createMatchController)

export default matchRouter; 