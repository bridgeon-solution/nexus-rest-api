import leaveSchema from "../database/schemas/leave.schema";
import { LeaveRequest } from "../entities/entityClasses.ts/leave.interface";

class LeaveRepository {
    async createLeave(leaveData: LeaveRequest) {
        if (leaveData) {
            const createLeave = await leaveSchema.create(leaveData)
            return createLeave;
        }
    }

    async getAllLeavesById(id: string) {
        const allLeaves = await leaveSchema.find({ employeeId: id });
        return allLeaves;
    }
}



export default new LeaveRepository()