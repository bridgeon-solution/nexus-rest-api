import app from "./app";
import globalErrorHandler from "./middlewares/globalErrorHandler";


app.use(globalErrorHandler);

app.listen(4001, () => {
  console.log("employee-service is listening to 4001")
})