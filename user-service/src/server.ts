import app from "./app";
import { listenForLeaveInfo } from "./controllers/employees/employeeDeduction.controller";
import { listenForEmployeeInfo, listenForEmployeeInfoById, listenForEmployeeInfoByTeam } from "./controllers/employees/getEmployeeId.controller";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import messageBroker from "./utils/messageBroker";
import './utils/croneJob'; // Import the cron job to initialize it
// import './utils/auth2.O'

app.use(globalErrorHandler)

messageBroker.Connect().then(() => {
  messageBroker.setupQueue("Employees")
  messageBroker.setupQueue("EmployeeById")
  messageBroker.setupQueue("deduction")
  messageBroker.setupQueue("members")
  messageBroker.setupQueue("getEmployeeById")
  messageBroker.setupQueue("getEmployees")
  listenForEmployeeInfo()
  listenForLeaveInfo()
  listenForEmployeeInfoById()
  listenForEmployeeInfoByTeam()
})

app.listen(4000, () => {
  console.log('user service is listening to 4000')
})