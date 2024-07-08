import { Employee } from "../../entities/entityClasses.ts/employee.interface";
import { AllLeave } from "../../entities/entityClasses.ts/leave.interface";
import leaveRepository from "../../repositories/leave.repository";
import messageBroker from "../../utils/messageBroker";

class getLeaves {
    constructor() { }

    async getAllLeavesById(id: string) {
        const data = await leaveRepository.getAllLeavesById(id);
        return data;
    }

    async getAllLeaves() {
        return new Promise(async (resolve, reject) => {
            try {
                await messageBroker.sendMessage("getEmployees", 'all');
                await messageBroker.listenForResponse("EmployeeId");

                messageBroker.on("dataRecieved", async (data: { status: string, employee: [Employee] }) => {
                    try {
                        const leaveData = await leaveRepository.getAllLeaves(data.employee);
                        resolve(leaveData);  // Resolve the promise with leaveData
                    } catch (error) {
                        reject(error);  // Reject the promise if an error occurs
                    }
                });
            } catch (error) {
                reject(error);  // Reject the promise if an error occurs in the initial steps
            }
        });
    }

    async getAllLeaveType() {
        const data = await leaveRepository.getAllLeaveTypes();
        return data
    }
}

export default new getLeaves()