import app from "./app";
import globalErrorHandler from "./middlewares/globalErrorHandler";

app.use(globalErrorHandler)

app.listen(4000, () => {
  console.log('user service is listening to 4000')
})