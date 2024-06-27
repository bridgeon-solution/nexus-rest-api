import app from "./app";
import SendmessageBroker from "./controllers/getEmployee.controller";
import dbConnection from "./databases/connection/database.connection";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import messageBroker from "./utils/messageBroker";

dbConnection()

// const eventListener = async (data: any) => {
//   console.log(data)
// }

// messageBroker.Connect().then(() => {
//   SendmessageBroker()
//   messageBroker.setupQueue("EmployeeId")
//   messageBroker.listenForResponse("EmployeeId")
//   messageBroker.on("dataRecieved  ", eventListener)
// })

app.use(globalErrorHandler)


app.listen(4002, () => {
  console.log('team-service is listening to port 4002')
})