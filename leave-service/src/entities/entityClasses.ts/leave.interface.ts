import { Employee } from "./employee.interface"

export interface LeaveRequest {
    startDate: Date,
    endDate: Date,
    reason: string,
    leaveType: string,
    days?: number,
    status: string,
    createdAt: Date,
    employeeId: number
}

export interface LeaveType {
    name: string,
    createdAt: Date,
    updatedAt: Date
}

export interface AllLeave {
    leaveData: LeaveRequest,
    employee: Employee
}