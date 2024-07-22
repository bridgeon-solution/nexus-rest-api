// leaveBalanceService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const MONTHLY_LEAVE_BALANCE = 10; // Define the monthly leave balance

const resetLeaveBalance = async (): Promise<void> => {
    try {
        // Fetch all employees
        const employees = await prisma.employee.findMany();

        // Reset leave balance for each employee
        for (const employee of employees) {
            await prisma.employee.update({
                where: { id: employee.id },
                data: { leaveBalance: MONTHLY_LEAVE_BALANCE }, // Reset leave balance to monthly value
            });
        }

        console.log('Leave balances reset successfully');
    } catch (error) {
        console.error('Error resetting leave balances:', error);
    } finally {
        await prisma.$disconnect();
    }
};
const resetpaySlipGenerate = async (): Promise<void> => {
    try {
        // Fetch all employees
        const employees = await prisma.employee.findMany();

        // Reset leave balance for each employee
        for (const employee of employees) {
            await prisma.employee.update({
                where: { id: employee.id },
                data: { isgenerate: false }, // Reset leave balance to monthly value
            });
        }

        console.log('Payslip reset successfully');
    } catch (error) {
        console.error('Error resetting Payslip', error);
    } finally {
        await prisma.$disconnect();
    }
};


export { resetLeaveBalance, resetpaySlipGenerate };
