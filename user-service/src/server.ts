import app from "./app";
import { listenForLeaveInfo } from "./controllers/employees/employeeDeduction.controller";
import { listenForEmployeeInfo } from "./controllers/employees/getEmployeeId.controller";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import messageBroker from "./utils/messageBroker";
app.use(globalErrorHandler)

messageBroker.Connect().then(() => {
  messageBroker.setupQueue("getEmployees")
  messageBroker.setupQueue("deduction")
  listenForEmployeeInfo()
  listenForLeaveInfo()
})

app.listen(4000, () => {
  console.log('user service is listening to 4000')

})