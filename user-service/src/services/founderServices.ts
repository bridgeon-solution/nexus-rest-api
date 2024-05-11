import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { FounderSignup } from "../models/founderInterface";
import hashPassword from "../../../common/utils/hashPassword";
import founderPaymnet from "../utils/payment";
const prisma = new PrismaClient();



const founderSignupSrvc = async (signupValues: FounderSignup): Promise<boolean> => {
    try {
        signupValues.password = await hashPassword(signupValues.password);
        const allDbs = await prisma.founders.create({ data: signupValues });
        if (allDbs) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getAllFoundersSrvc = async (): Promise<FounderSignup[]> => {
    const founders = await prisma.founders.findMany();
    return founders
}

const FounderByIdSrvc = async (founderId: string): Promise<FounderSignup | boolean> => {
    const id: number = Number(founderId)
    const founder = await prisma.founders.findUnique({ where: { id } });
    if (founder) {
        return founder
    } else {
        return false
    }
}

const updateFounderSrvc = async (data: FounderSignup, founderId: string): Promise<FounderSignup | boolean> => {
    const id: number = Number(founderId);
    const updateFounder = await prisma.founders.update({
        where: { id },
        data: { fullname: data.fullname, email: data.email, companyname: data.companyname, image: data.image }
    })
    if (data) {
        return data
    } else {
        return false
    }

}

const deleteFounderSrvc = async (founderId: string): Promise<boolean> => {
    const id: number = Number(founderId);
    try {
        const deleteFounder = await prisma.founders.delete({ where: { id } });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

}

const paymentFounderSrvc = async (fEmail: string,amount:number) => {
    try {
        const founderFinding = await prisma.founders.findUnique({ where: { email:fEmail } });
        
        if (founderFinding) {
            const paymentValidation = founderPaymnet(amount, fEmail);
            if (paymentValidation) {
                return paymentValidation
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const founderSrvc = {
    founderSignupSrvc,
    getAllFoundersSrvc,
    FounderByIdSrvc,
    updateFounderSrvc,
    deleteFounderSrvc,
    paymentFounderSrvc
} 