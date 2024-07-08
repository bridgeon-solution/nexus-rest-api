import payRollModel from "../database/schema/payRoll.schema";
import { Employee } from "../entities/entityClasses/employee.interface";
import { PayRoll, PayRollEmployee } from "../entities/entityClasses/payRoll.interface";

class PayRollRepository {
    constructor() { }

    async createPayRoll(payRollData: PayRoll) {
        if (payRollData) {
            const payRoll = await payRollModel.create(payRollData);
            return payRoll
        }
    }

    async getPayRoll(employee: Employee[]): Promise<PayRollEmployee[]> {
        let payRollEmployeeData: any;
        try {
            const payRollData: PayRoll[] = await payRollModel.find({});
            const data: PayRollEmployee[] = payRollData.map(pX => {
                const findedEmployess: Employee = employee.find((x) => { return x.id === pX.employeeId });
                if (findedEmployess) {
                    return payRollEmployeeData = { pX, findedEmployess };
                }
            });
            return data;

        } catch (error) {

        }
    }

    async getPayRollById(employee: Employee, empId: string): Promise<PayRollEmployee> {
        try {
            const id: number = Number(empId);
            const data = await payRollModel.findOne({ employeeId: id });
            if (data) {
                const fullData: PayRollEmployee = { findedEmployess: employee, pX: data };
                return fullData
            }
        } catch (error) {

        }
    }

    async getPayRollByDate(startDate: Date, endDate: Date):Promise<PayRoll[]> {
        // Fetch payslips within the date range
        const payslips = await payRollModel.find({
            paymentDate: { $gte: startDate, $lte: endDate }
        });
        return payslips
    }
}

export default new PayRollRepository()