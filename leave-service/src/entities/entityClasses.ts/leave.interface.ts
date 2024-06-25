export interface LeaveRequest {
    startDate: Date,
    endDate: Date,
    reason: string,
    leaveType: string,
    days: number,
    status: string,
    createdAt: Date,
    employeeId: number
}
