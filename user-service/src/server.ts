import app from "./app";

// console.log(process.env.DATABASE_URL);

app.listen(4000,()=>{
    console.log('user-service is listening in port 4000');
})