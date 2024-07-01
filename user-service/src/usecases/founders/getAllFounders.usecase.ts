import { PrismaClient, founders } from "@prisma/client";
import { Founder } from "../../enitities/entityClasses/founder.interface";
import CustomError from "../../utils/customErrorHandler";

const prisma = new PrismaClient();

class GetAllFounders {
    constructor() { }

    async getFounders(): Promise<founders[] | string> {

        try {
            const founderFinding: founders[] = await prisma.founders.findMany();
            if (founderFinding) {
                return founderFinding
            } else {
                return 'Not found';
            }
        } catch (error) {
            throw new CustomError(error.message, 500)
        }
    }
}

export default new GetAllFounders()