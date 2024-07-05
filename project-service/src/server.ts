import app from "./app";
import dbConnection from "./databases/connection/database.connection";
import globalErrorHandler from "./middleware/globalErrorHandler";

dbConnection()

app.use(globalErrorHandler)


app.listen(4004, () => {
  console.log(`project-service is listening to 4004`)
})