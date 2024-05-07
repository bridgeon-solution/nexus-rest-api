import { NextFunction, Request, Response } from "express";
import { founderSrvc } from "../services/founderServices";

const founderSignup = (req:Request,res:Response, next:NextFunction) => {
    founderSrvc.founderSignupSrvc()
}

export const founderController = {
    founderSignup
}