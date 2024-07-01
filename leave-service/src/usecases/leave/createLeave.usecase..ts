import { LeaveRequest, LeaveType } from "../../entities/entityClasses.ts/leave.interface";
import leaveRepository from "../../repositories/leave.repository";

class CreateLeave {
    constructor() { }
    async createLeave(leaveData: LeaveRequest) {
        console.log(leaveData);
        
        const createLeaveRepoaitory = await leaveRepository.createLeave(leaveData);
        return createLeaveRepoaitory
    }

    async createLeaveType(typeData: LeaveType) {
        const data = await leaveRepository.createLeaveType(typeData);
        return data;
    }
}

export default new CreateLeave()