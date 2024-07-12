import app from "./app";
import { sendLeaveInfo } from "./controllers/leave/deduction.controller";
import { connection } from "./database/connection/dbConnection";
import deleteLeaveUsecase from "./usecases/leave/deleteLeave.usecase";
import messageBroker from "./utils/messageBroker";

connection();

messageBroker.Connect().then(() => {
    messageBroker.setupQueue("EmployeeId")
    messageBroker.setupQueue("leaveId")
    messageBroker.setupQueue("deleting")
    deleteLeaveUsecase.deleteLeave()
})

app.listen(4001, () => {
    console.log('Leave service is listening to 4001');
})