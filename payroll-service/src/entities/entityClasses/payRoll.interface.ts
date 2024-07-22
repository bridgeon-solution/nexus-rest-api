import { ObjectId } from "mongoose";
import { Employee } from "./employee.interface";

export interface PayRoll {
    employeeId: number,
    paymentDate: Date,
    baseSalary: number,
    deductions: number,
    netPay: number,
    note?: string,
    timestamps: boolean
}

export interface PayRollEmployee {
    pX: PayRoll;
    findedEmployess: Employee;
}