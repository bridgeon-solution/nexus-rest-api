import { LeaveData, PrismaClient } from "@prisma/client";
import { LeaveRequest } from "../entities/entityClasses.ts/leave.interface";


const prisma = new PrismaClient()

class LeaveRepository {
    async createLeave(leaveData: LeaveRequest): Promise<LeaveData> {
        if (leaveData) {
            const createLeave = await prisma.leaveData.create({
                data: leaveData
            })
            return createLeave;
        }
    }

    async getAllLeaves() {
        const allLeaves = await prisma.leaveData.findMany()
        return allLeaves;
    }
}



export default new LeaveRepository()