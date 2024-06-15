import { PrismaClient, founders } from "@prisma/client";
import { Founder } from "../../enitities/entityClasses/founder.interface";
import CustomError from "../../utils/customErrorHandler";

const prisma = new PrismaClient();

class GetFounderById {
    constructor() { }

    async getFounder(id: string): Promise<Founder | string> {
        const founderId: number = Number(id);
        try {
            if (founderId) {
                const founderFinding: Founder = await prisma.founders.findUnique({ where: { id: founderId } });
                if (founderFinding) {
                    return founderFinding
                } else {
                    return 'Not found';
                }
            }
        } catch (error) {
            throw new CustomError(error.message, 500)
        }
    }
}

export default new GetFounderById()