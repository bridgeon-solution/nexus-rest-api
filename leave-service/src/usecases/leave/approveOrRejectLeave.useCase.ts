import { sendLeaveInfo } from "../../controllers/leave/deduction.controller";
import leaveRepository from "../../repositories/leave.repository"
import messageBroker from "../../utils/messageBroker";

class ApproveOrRejectLeave {
    constructor() { }

    async updateLeaveStatus(id: string, url: string) {
        const approve: boolean = url.includes('approve');
        const reject: boolean = url.includes('reject');
        try {
            if (approve) {
                sendLeaveInfo()
                const data = await leaveRepository.updateLeaveStatus(id, 'Approved');
                if (data) {
                    await messageBroker.sendMessage("deduction", data);
                    if (!data) {
                        throw new Error("Employee Not Found")
                    }
                }
                return data;
            } else if (reject) {
                const data = await leaveRepository.updateLeaveStatus(id, 'Rejected');
                return data;
            }
        } catch (error) {
            console.log(error)
            const data = {
                status: 'failed',
                message: error.message
            }
            await messageBroker.sendMessage("EmployeeId", data)
        }
    }
}

export default new ApproveOrRejectLeave()