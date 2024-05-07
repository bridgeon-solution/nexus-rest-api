import app from "./app";
import dotenv from 'dotenv';
import path from "path";

dotenv.config({path: path.join(__dirname, './config.env')});


app.listen(4000,()=>{
    console.log('Founder is listening in port 4000');
})