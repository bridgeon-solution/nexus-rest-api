import mongoose from "mongoose";
import { PayRoll } from "../../entities/entityClasses/payRoll.interface";

const schema = new mongoose.Schema<PayRoll>({
    employeeId: {
        type: Number
    },
    paymentDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    baseSalary: {
        type: Number,
        default: 0,
        required: true
    },
    deductions: {
        type: Number,
        default: 0,
        required: true
    },
    netPay: {
        type: Number,
        default: 0,
        required: true
    },
    note: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

// Pre-save hook to calculate the totalPaid amount
schema.pre('save', function (next) {
    this.netPay = this.baseSalary - this.deductions;
    next();
});

const payRollModel = mongoose.model('PayRollData', schema);

export default payRollModel