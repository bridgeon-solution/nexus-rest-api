// payslipController.ts
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import payRollModel from '../../database/schema/payRoll.schema';
import getPayRollUsecase from '../../usecases/payRoll/getPayRoll.usecase';

export const getPayslipsByDate = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate } = req.query;

        // Validate dates
        if (!startDate || !endDate) {
            return res.status(400).json({ message: 'Start date and end date are required' });
        }

        const start = new Date(startDate as string);
        const end = new Date(endDate as string);
        end.setHours(23, 59, 59, 999); // Ensure end of day is included
        const data = await getPayRollUsecase.getPaySlipDate(start, end);
        console.log(data);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
