import mongoose from "mongoose";
import { LeaveRequest } from "../../entities/entityClasses.ts/leave.interface";
import { NextFunction } from "express";

const schema = new mongoose.Schema<LeaveRequest>({
    startDate: {
        type: Date,
        require: true,
    },
    endDate: {
        type: Date,
        require: true,
    },
    reason: String,
    leaveType: String,
    employeeId: Number,
    days: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});
schema.pre('save', function (next: NextFunction) {
    if (this.startDate && this.endDate) {
        const convertedlStartDate = new Date(this.startDate);
        const convertedlEndDate = new Date(this.endDate);
        const timeDifference: number = Math.abs(convertedlStartDate.getTime() - convertedlEndDate.getTime());
        const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        this.days = dayDifference;
        console.log(this.endDate);

    }
    next()
});


const leaveSchema = mongoose.model('LeaveData', schema);

export default leaveSchema