import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { FounderSignup } from "../models/founderInterface";
const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
    return await bcrypt.hash(password, salt);
}

export const founderSignupSrvc = async (signupValues: FounderSignup): Promise<boolean> => {
    signupValues.password = await hashPassword(signupValues.password);
    const allDbs = await prisma.founders.create({ data: signupValues });
    if (allDbs) {
        return true
    } else {
        return false
    }
}

export const getAllFoundersSrvc = async (): Promise<FounderSignup[]> => {
    const founders = await prisma.founders.findMany();
    return founders
}

export const FounderByIdSrvc = async (founderId: string): Promise<FounderSignup | boolean> => {
    const id: number = Number(founderId)
    const founder = await prisma.founders.findUnique({ where: { id } });
    if (founder) {
        return founder
    } else {
        return false
    }
}

export const updateFounderSrvc = async (data: FounderSignup, founderId: string): Promise<FounderSignup | boolean> => {
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
export const deleteFounderSrvc = async (founderId: string):Promise<boolean> => {
    const id: number = Number(founderId);
    try {
        const deleteFounder = await prisma.founders.delete({ where: { id } });
        return true;
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
    deleteFounderSrvc
} 