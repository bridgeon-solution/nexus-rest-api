import { Employee } from "../../entities/entityinterfaces.ts/employee.inteface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class DeleteEmployee {
  constructor() { }
  async deleteEmployee(employeeId: string) {
    try {
      await messageBroker.sendMessage("delete_employee", employeeId);
      // send message to the queue
      await messageBroker.listenForResponse("deleted_employee");
      // listening to queue where other service processed the data and send to this service

      // wrapping event listener inside a promise
      const responsePromise = new Promise((resolve, reject) => {
        const eventListener = (data: Employee) => { // event listener if data is success
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener)
          resolve(data);
        };

        const errorListener = (error: CustomError) => { // event listener if data has error
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          if (error.message.includes('Record to delete does not exist')) {
            reject(new CustomError("Record to delete does not exist", 404))
          } else {
            reject(new CustomError(error.message, 500))
          }
          reject(new CustomError(error.message, 500))
        }
        messageBroker.on("dataRecieved", eventListener);
        messageBroker.on("dataRecievedError", errorListener);
        setTimeout(() => {
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          reject(new CustomError("Employee Deletion Response timed out", 504))
        }, 5000)
      });
      return await responsePromise
    } catch (error) {
      console.log("error deleting employee : ", error);
      throw new CustomError(error.message, 500);
    }
  }
}

export default new DeleteEmployee()