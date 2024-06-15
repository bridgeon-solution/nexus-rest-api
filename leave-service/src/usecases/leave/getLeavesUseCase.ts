import leaveRepository from "../../repositories/leave.repository";

class getLeaves {
    constructor() { }
    async getAllLeaves() {
        const data = await leaveRepository.getAllLeaves();
        return data;
    }
}

export default new getLeaves()