import { Department } from "../../entities/entityinterfaces.ts/department.interface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class DepartmentId {
  constructor() { }
  async getDepartmentById(department: string) {
    try {
      await messageBroker.sendMessage("read_departmentbyid", department);
      // send message to the queue
      await messageBroker.listenForResponse("readed_departmentId");

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
          console.log(error)
          reject(new CustomError(error.message, 500))
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
      console.log("error getting department : ", error);
      throw new CustomError(error.message, 500)
    }
  }
}

export default new DepartmentId()