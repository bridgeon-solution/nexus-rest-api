import leaveRepository from "../../repositories/leave.repository"

class ApproveOrRejectLeave {
    constructor() { }

    async updateLeaveStatus(id: string, url: string) {
        const approve: boolean = url.includes('approve');
        const reject: boolean = url.includes('reject');
        if (approve) {
            const data = await leaveRepository.updateLeaveStatus(id, 'Approved');
            return data;
        } else if (reject) {
            const data = await leaveRepository.updateLeaveStatus(id, 'Rejected');
            return data;
        }
    }
}

export default new ApproveOrRejectLeave()