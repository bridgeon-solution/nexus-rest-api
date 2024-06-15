import { Request, Response } from "express";
import founderPayment from "../../usecases/founders/founderPayment";

const paymentFounder = async (req: Request, res: Response) => {
    const founderEmail: string = req.params.id;
    const amount: number = req.body.amount;
    try {
        const data = await founderPayment.founderPayment(founderEmail, amount)
        if (data) {
            res.status(200).json({
                message: 'success',
                data
            })
        } else {
            res.status(404).json({
                message: 'Failed'
            })        }
    } catch (error) {
        console.log(error);
    }
}

export default paymentFounder