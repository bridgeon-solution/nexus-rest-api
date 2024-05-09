import { NextFunction, Request, Response } from "express";
import { founderSrvc } from "../services/founderServices";
import { FounderSignup } from "../models/founderInterface";

const founderSignup = async (req: Request, res: Response) => {
    const signupValues: FounderSignup = req.body;
    const data = await founderSrvc.founderSignupSrvc(signupValues);
    if (data) {
        res.status(201).json({
            message: 'User registered successfully',
            datas: data
        })
    } else {
        res.status(404).json({
            message: 'an error occured'
        })
    }
}
const getAllFounders = async (req: Request, res: Response) => {
    const data = await founderSrvc.getAllFoundersSrvc();
    res.status(200).json({
        datas: data
    })
}
const updateFounder = async (req: Request, res: Response) => {
    const founderId: string = req.params.id;
    const updateDatas: FounderSignup = req.body;
    const data = await founderSrvc.updateFounderSrvc(updateDatas, founderId);
    if (data) {
        res.status(201).json({
            message: 'Successfully updated',
            data
        })
    } else {
        res.status(404).json({
            message: 'an error occured'
        })
    }
}
const foundersById = async (req: Request, res: Response) => {
    const founderId: string = req.params.id;
    const data = await founderSrvc.FounderByIdSrvc(founderId);
    if (data) {
        res.status(200).json({
            message: 'One result found',
            datas: data
        })
    } else {
        res.status(404).json({
            message: 'No such user'
        })
    }
}
const deleteFounder = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const data = await founderSrvc.deleteFounderSrvc(id);
    if (data) {
        res.status(204).json({
            message: 'Successfully deleted'
        })
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}
export const founderController = {
    founderSignup,
    getAllFounders,
    foundersById,
    updateFounder,
    deleteFounder
}