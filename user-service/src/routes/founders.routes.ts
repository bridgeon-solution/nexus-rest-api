import express, { Router } from "express";
import createFounder from "../controllers/founders/createFounder.controller";
import { profileImgUpload } from "../middlewares/multer";
import paymentFounder from "../controllers/founders/founderPayment";
import deleteFounder from "../controllers/founders/deleteFounder.controller";
import { founderById } from "../controllers/founders/getFounderId.controller";
import { getFounders } from "../controllers/founders/getFounder";

const founderRouter: Router = express.Router()

founderRouter.post('/create', profileImgUpload , createFounder)
founderRouter.get('/' , getFounders)
founderRouter.get('/:id', founderById)
founderRouter.post('/delete/:id', deleteFounder)
founderRouter.post('/payment-founders/:id', paymentFounder)

export default founderRouter