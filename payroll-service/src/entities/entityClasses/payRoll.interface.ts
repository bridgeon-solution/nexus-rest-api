import { ObjectId } from "mongoose";

export interface PayRoll {
    employeeId: number,
    paymentDate: Date,
    baseSalary: number,
    deductions: number,
    netPay: number,
    note?: string,
    timestamps: boolean
}