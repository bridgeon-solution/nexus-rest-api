import { LeaveRequest } from "../../entities/entityClasses.ts/leave.interface";
import leaveRepository from "../../repositories/leave.repository";

class CreateLeave {
    constructor() { }
    async createLeave(leaveData: LeaveRequest) {
        const createLeaveRepoaitory = await leaveRepository.createLeave(leaveData);
        return createLeaveRepoaitory
    }
}

export default new CreateLeave()