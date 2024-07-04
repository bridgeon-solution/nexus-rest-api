export interface LeaveData {
    startDate: Date,
    endDate: Date,
    reason: string,
    leaveType: string,
    days?: number,
    status: string,
    createdAt: Date,
    employeeId: number
}