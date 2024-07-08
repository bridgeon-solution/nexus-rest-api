import cron from 'node-cron';
import { resetLeaveBalance, resetpaySlipGenerate } from './userDetailsUpdatesPermont';

// Schedule to run on the first day of every month at 00:00
cron.schedule('0 0 1 * *', async () => {
    console.log('Running monthly leave balance update...');
    // await resetLeaveBalance();
    await resetpaySlipGenerate()
});
