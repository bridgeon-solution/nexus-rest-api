import leaveRepository from "../../repositories/leave.repository";

class getLeaves {
    constructor() { }
    async getAllLeavesById(id: string) {
        const data = await leaveRepository.getAllLeavesById(id);
        return data;
    }
}

export default new getLeaves()