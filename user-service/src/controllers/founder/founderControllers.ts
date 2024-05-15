import { NextFunction, Request, Response } from "express";
import { founderSrvc } from "../../services/founderServices";
import { FounderSignup } from "../../models/founderInterface";

const founderSignup = async (req: Request, res: Response) => {
    try {
        const signupValues: FounderSignup = req.body;
        const data = await founderSrvc.founderSignupSrvc(signupValues);
        if (data) {
            res.status(201).json({
                message: 'User registered successfully',
                datas: data
            })
        } else {
            res.status(404).json({
                message: 'Something wend wrong',
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const getAllFounders = async (req: Request, res: Response) => {
    try {
        const data = await founderSrvc.getAllFoundersSrvc();
        if (data) {
            res.status(200).json({
                datas: data
            })
        } else {
            throw new Error("data not found")
        }
    } catch (error) {
        throw new Error(error)
    }
}

const updateFounder = async (req: Request, res: Response) => {
    try {
        const founderId: string = req.params.id;
        const updateDatas: FounderSignup = req.body;
        const data = await founderSrvc.updateFounderSrvc(updateDatas, founderId);
        if (data) {
            res.status(201).json({
                message: 'Successfully updated',
                data: data
            })
        } else {
            throw new Error("user not found")
        }
    } catch (error) {
        throw new Error(error)
    }
}

const foundersById = async (req: Request, res: Response) => {
    try {
        const founderId: string = req.params.id;
        const data = await founderSrvc.FounderByIdSrvc(founderId);
        if (data) {
            res.status(200).json({
                message: 'success',
                datas: data
            })
        } else {
            throw new Error("user not found")
        }
    } catch (error) {
        throw new Error(error)
    }
}

const deleteFounder = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const data = await founderSrvc.deleteFounderSrvc(id);
        console.log(data);
        
        if (data) {
            res.status(200).json({
                message: 'Successfully deleted'
            })
        } else {
            res.status(404).json({
                message: 'Error deleting user'
            })
        }
    } catch (error) {
        throw new Error(error)
    }
}

const paymentFounder = async (req: Request, res: Response) => {
    const founderEmail: string = req.params.id;
    const amount: number = req.body.amount;
    try {
        const data = await founderSrvc.paymentFounderSrvc(founderEmail, amount);
        if (data) {
            res.status(200).json({
                message: 'success',
                data
            })
        } else {
            res.status(404).json({
                message: 'Failed'
            })
        }
    } catch (error) {
        console.log(error);
    }
}
export const founderController = {
    founderSignup,
    getAllFounders,
    foundersById,
    updateFounder,
    deleteFounder,
    paymentFounder
}