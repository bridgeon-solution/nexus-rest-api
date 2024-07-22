import app from "./app";
import SendmessageBroker from "./controllers/getEmployee.controller";
import { listenForTeamInfo } from "./controllers/teamMembers/getTeamMembersMessageBroker.controller";
import dbConnection from "./databases/connection/database.connection";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import messageBroker from "./utils/messageBroker";

dbConnection()

messageBroker.Connect().then(() => {
  messageBroker.setupQueue("getEmployees")
  messageBroker.setupQueue("members")
  messageBroker.setupQueue("project")
  messageBroker.setupQueue("teamMembers")
  listenForTeamInfo()
})

app.use(globalErrorHandler)


app.listen(4003, () => {
  console.log('team-service is listening to port 4003')
})