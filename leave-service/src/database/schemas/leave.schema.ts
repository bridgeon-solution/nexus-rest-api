import mongoose from "mongoose";
import { LeaveRequest } from "../../entities/entityClasses.ts/leave.interface";

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
    days: Number,
    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

const leaveSchema = mongoose.model('LeaveData', schema);

export default leaveSchema