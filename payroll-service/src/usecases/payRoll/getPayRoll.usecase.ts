import { Employee } from "../../entities/entityClasses/employee.interface";
import { PayRoll, PayRollEmployee } from "../../entities/entityClasses/payRoll.interface";
import payRollRepository from "../../repositories/payRoll.repository";
import messageBroker from "../../utils/messageBroker";

class getPayRoll {
    async getPayRoll() {
        return new Promise(async (resolve, reject) => {
            try {
                await messageBroker.sendMessage("getEmployees", '');
                await messageBroker.listenForResponse("Employees");

                messageBroker.on("dataRecieved", async (data: { status: string, employee: Employee[] }) => {
                    try {
                        const payRollData: PayRollEmployee[] = await payRollRepository.getPayRoll(data.employee);
                        resolve(payRollData);  // Resolve the promise with leaveData

                    } catch (error) {
                        reject(error);  // Reject the promise if an error occurs
                    }
                });
            } catch (error) {
                reject(error);  // Reject the promise if an error occurs in the initial steps
            }
        });
    }

    async getPaySlipById(id: string) {
        return new Promise(async (resolve, reject) => {
            try {
                await messageBroker.sendMessage("getEmployeeById", id);
                await messageBroker.listenForResponse("EmployeeById");

                messageBroker.on("dataRecieved", async (data: { status: string, employee: Employee }) => {
                    try {
                        const payRollData = await payRollRepository.getPayRollById(data.employee, id);
                        resolve(payRollData);  // Resolve the promise with leaveData

                    } catch (error) {
                        reject(error);  // Reject the promise if an error occurs
                    }
                });
            } catch (error) {
                reject(error);  // Reject the promise if an error occurs in the initial steps
            }
        });
    }

    async getPaySlipDate(startDate: Date, endDate: Date) {
        const data: PayRoll[] = await payRollRepository.getPayRollByDate(startDate, endDate)
    }

}

export default new getPayRoll()