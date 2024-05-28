import { Employee, EmployeeResponse } from "../../entities/entityinterfaces.ts/employee.inteface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class EmployeeId {
  constructor() { }
  async getEmployeeById(employee: string) {
    try {
      await messageBroker.sendMessage("read_employeebyid", employee);
      // send message to the queue
      await messageBroker.listenForResponse("readed_employeebyid");

      // wrapping event listener inside a promise
      const responsePromise = new Promise((resolve, reject) => {
        const eventListener = (data: EmployeeResponse) => { // for listening data success
          messageBroker.off("dataRecieved", eventListener);
          console.log(data)
          resolve(data);
        };
        const errorListener = (error: CustomError) => {
          messageBroker.off('dataRecieved', eventListener)
          messageBroker.off('dataRecievedError', errorListener)
          reject(new CustomError(error.message, 500))
        }
        messageBroker.on("dataRecieved", eventListener);
        messageBroker.on("dataRecievedError", errorListener)
        setTimeout(() => {
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          reject(new CustomError("Employee Request Response timed out", 504))
        }, 5000)
      });
      return await responsePromise
    } catch (error) {
      console.log("error finding Employees : ", error);
      throw new CustomError(error.message, 500)
    }
  }
}

export default new EmployeeId()