import app from "./app";
import { connection } from "./database/connection/dbConnection";


connection()
app.listen(4002,()=>{
    console.log('Payroll service is listening to 4002');
})