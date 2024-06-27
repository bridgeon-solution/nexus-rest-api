import app from "./app";
import { connection } from "./database/connection/dbConnection";
import messageBroker from "./utils/messageBroker";

connection();

messageBroker.Connect().then(()=>{
    messageBroker.setupQueue("EmployeeId")
})

app.listen(4001,()=>{
    console.log('Leave service is listening to 4001');  
})