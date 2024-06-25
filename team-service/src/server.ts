import app from "./app";
import SendmessageBroker from "./controllers/getEmployee.controller";
import messageBroker from "./utils/messageBroker";

const eventListener = async (data: any) => {
  console.log(data)
}

messageBroker.Connect().then(() => {
  SendmessageBroker()
  messageBroker.setupQueue("EmployeeId")
  messageBroker.listenForResponse("EmployeeId")
  messageBroker.on("dataRecieved", eventListener)
})



app.listen(4002, () => {
  console.log('team-service is listening to port 4002')
})