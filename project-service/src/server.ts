import app from "./app";
import dbConnection from "./databases/connection/database.connection";

dbConnection()

app.listen(4004, () => {
  console.log(`project-service is listening to 4004`)
})