import app from "./app";
import { connection } from "./database/connection/dbConnection";

connection()
app.listen(4001,()=>{
    console.log('Leave service is listening to 4001');  
})