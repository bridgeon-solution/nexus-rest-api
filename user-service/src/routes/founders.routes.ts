import express, { Router } from "express";
import createFounder from "../controllers/founders/createFounder.controller";

const founderRouter: Router = express.Router()

founderRouter.post('/create', createFounder)

export default founderRouter