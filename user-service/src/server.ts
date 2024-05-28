import app from "./app";
import globalErrorHandler from "./middlewares/errorHandler";
import messageBroker from "./utils/messageBroker";
// console.log(process.env.DATABASE_URL);

const startServer = async () => {
    await messageBroker.Connect();

    //setup necessary queues
    await messageBroker.setupQueue("create_department");
    await messageBroker.setupQueue("read_department");
    await messageBroker.setupQueue("read_departmentbyid");
    await messageBroker.setupQueue("update_department");
    await messageBroker.setupQueue("delete_department");
    // queues for department

    await messageBroker.setupQueue("create_employee");
    await messageBroker.setupQueue("read_employee");
    await messageBroker.setupQueue("read_employeebyid");
    await messageBroker.setupQueue("delete_employee");
    await messageBroker.setupQueue("update_employee");
    // queues for employees
}

startServer()
app.use(globalErrorHandler)
app.listen(4000, () => {
    console.log('user-service is listening in port 4000');
})
