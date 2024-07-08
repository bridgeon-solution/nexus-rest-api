import app from "./app";
import { connection } from "./database/connection/dbConnection";
import messageBroker from "./utils/messageBroker";

connection();

messageBroker.Connect().then(() => {
    messageBroker.setupQueue("Employees")
    messageBroker.setupQueue("EmployeeById")
    // messageBroker.setupQueue("leaveId")
})

app.listen(4002, () => {
    console.log('Payroll service is listening to 4002');
})