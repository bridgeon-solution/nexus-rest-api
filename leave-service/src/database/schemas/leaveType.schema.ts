import mongoose from "mongoose";
import { LeaveType } from "../../entities/entityClasses.ts/leave.interface";

const leaveTypeSchema = new mongoose.Schema<LeaveType>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const leaveTypeModel = mongoose.model('LeaveTypeData', leaveTypeSchema);

export default leaveTypeModel