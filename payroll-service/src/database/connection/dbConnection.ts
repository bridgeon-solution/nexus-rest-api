import mongoose from "mongoose";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, '../../.env') });

export function connection() {
    const connectionUrl = process.env.DATABASE_URL as string;
    mongoose.connect(connectionUrl, {
        dbName: 'Payroll'
    }).then((res) => {
        console.log("Mongo Connected");
    }, (err) => {
        console.log(err.message);
    })
}