import mongoose from "mongoose";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, '../../.env') });

export function connection() {    
    mongoose.connect(process.env.DATABASE_URL, {
        dbName: 'Leave'
    }).then((res) => {
        console.log("Mongo Connected");
    }, (err) => {
        console.log(err.message);
    })
}