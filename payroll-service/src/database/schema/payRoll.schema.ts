import mongoose from "mongoose";
import { PayRoll } from "../../entities/entityClasses/payRoll.interface";

const schema = new mongoose.Schema<PayRoll>({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    baseSalary: {
        type: Number,
        required: true
    },
    deductions: {
        type: Number,
        required: true
    },
    totalPaid: {
        type: Number,
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
    this.totalPaid = this.baseSalary - this.deductions;
    next();
});

module.exports = mongoose.model('payroll', schema)