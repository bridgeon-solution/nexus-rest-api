import { Department } from "../../entities/entityinterfaces.ts/department.interface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class CreateDepartment {
  constructor() { }
  async createDepartment(department: Department) {
    try {
      await messageBroker.sendMessage("create_department", department);
      // send message to the queue
      await messageBroker.listenForResponse("created_department");
      // listening to queue where other service processed the data and send to this service

      // wrapping event listener inside a promise
      const responsePromise = new Promise((resolve, reject) => {
        const eventListener = (data: Department) => { // event listener if data is success
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener)
          resolve(data);
        };

        const errorListener = (error: CustomError) => { // event listener if data has error
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          reject(new CustomError(error.message, 500))
        }
        messageBroker.on("dataRecieved", eventListener);
        messageBroker.on("dataRecievedError", errorListener);
        setTimeout(() => {
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          reject(new CustomError("Department Creation Response timed out", 504))
        }, 5000)
      });
      return await responsePromise
    } catch (error) {
      console.log("error sending department : ", error);
      throw new CustomError(error.message, 500);
    }
  }
}

export default new CreateDepartment()