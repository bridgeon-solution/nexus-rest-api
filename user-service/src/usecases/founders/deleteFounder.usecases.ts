import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeleteFounder {
    async deleteFounder(id: string) {
        const founderId: number = Number(id);
        try {
            const founderFinding = await prisma.founders.findUnique({ where: { id: founderId } });
            if (founderFinding) {
                const deleteFounder = await prisma.founders.delete({ where: { id: founderId } });
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default new DeleteFounder()