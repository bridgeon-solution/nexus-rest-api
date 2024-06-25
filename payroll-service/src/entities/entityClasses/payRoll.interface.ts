import { ObjectId } from "mongoose";

export interface PayRoll {
    employeeId: ObjectId,
    paymentDate: Date,
    baseSalary: number,
    deductions: number,
    totalPaid: number,
    note?: string,
    timestamps: boolean
}