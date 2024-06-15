import { Prisma, PrismaClient } from "@prisma/client";
import founderPaymnet from "../../utils/founderPayment";

const prisma = new PrismaClient()

class FounderPayment {
    async founderPayment(fEmail: string, amount: number) {
        try {
            const founderFinding = await prisma.founders.findUnique({ where: { email: fEmail } });

            if (founderFinding) {
                const paymentValidation = founderPaymnet(amount, fEmail);
                if (paymentValidation) {
                    await prisma.founders.update({
                        where: { email: fEmail },
                        data: { ispaid: true }
                    })
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
}

export default new FounderPayment()

