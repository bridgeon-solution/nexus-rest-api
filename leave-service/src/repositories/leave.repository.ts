import leaveSchema from "../database/schemas/leave.schema";
import leaveTypeModel from "../database/schemas/leaveType.schema";
import { Employee } from "../entities/entityClasses.ts/employee.interface";
import { AllLeave, LeaveRequest, LeaveType } from "../entities/entityClasses.ts/leave.interface";

class LeaveRepository {
    async createLeave(leaveData: LeaveRequest) {
        try {
            const createLeave = await leaveSchema.create(leaveData);
            return createLeave;
        } catch (error) {
            console.log(error);
        }
    }

    async createLeaveType(leaveTypeData: LeaveType) {
        if (leaveTypeData) {
            const createLeaveType = await leaveTypeModel.create(leaveTypeData)
            return createLeaveType;
        }
    }

    async getAllLeavesById(id: string) {
        const allLeaves = await leaveSchema.find({ employeeId: id });
        return allLeaves;
    }

    async getAllLeaves(employees: Employee[]) {
        let leaveValues: AllLeave;
        const leaves = await leaveSchema.find();
        console.log(leaves);

        const data = leaves.map(leaveData => {
            const employee = employees.find(emp => emp.id === leaveData.employeeId);
            if (employee) {
                return leaveValues = { leaveData, employee }
                // return {

                //     ...leaveData,
                //     employee: {
                //         id: employee.id,
                //         fullname: employee.fullname,
                //         email: employee.email,
                //         phone: employee.phone,
                //         salary: employee.salary,
                //         gender: employee.gender,
                //         image: employee.image,
                //         birthdate: employee.birthdate,
                //         role: employee.role,
                //         designation: employee.designation,
                //         department: employee.department,
                //         joindate: employee.joindate,
                //         updatedAt: employee.updatedAt
                //     }
                // }
            } else {
                leaves
            }
        })
        return data
    }

    async updateLeaveStatus(empId: string, status: string) {
        const approveLeave = await leaveSchema.findById(empId);
        approveLeave.status = status;
        approveLeave.save();
        return approveLeave
    }

    async getAllLeaveTypes() {
        const data = await leaveTypeModel.find({});
        return data
    }

}



export default new LeaveRepository()