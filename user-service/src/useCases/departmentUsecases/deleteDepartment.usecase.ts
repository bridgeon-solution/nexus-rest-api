import { Department } from "../../entities/entityinterfaces.ts/department.interface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class DeleteDepartment {
  constructor() { }
  async DeleteDepartment(department: string) {
    try {
      await messageBroker.sendMessage("delete_department", department);
      // send message to the queue
      await messageBroker.listenForResponse("deleted_department");

      // wrapping event listener inside a promise
      const responsePromise = new Promise((resolve, reject) => {
        const eventListener = (data: Department) => { // for listening data success
          messageBroker.off("dataRecieved", eventListener);
          console.log(data)
          resolve(data);
        };
        const errorListener = (error: CustomError) => {
          messageBroker.off('dataRecieved', eventListener)
          messageBroker.off('dataRecievedError', errorListener)
          if (error.message.includes('Record to delete does not exist')) {
            reject(new CustomError("Record to delete does not exist", 404))
          } else {
            reject(new CustomError(error.message, 500))
          }
        }
        messageBroker.on("dataRecieved", eventListener);
        messageBroker.on("dataRecievedError", errorListener)
        setTimeout(() => {
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          reject(new CustomError("Department Request Response timed out", 504))
        }, 5000)
      });
      return await responsePromise
    } catch (error) {
      console.log("error deleting department : ", error);
      throw new CustomError(error.message, 500)
    }
  }
}

export default new DeleteDepartment()