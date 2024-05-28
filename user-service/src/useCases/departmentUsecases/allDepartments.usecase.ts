import Department from "../../entities/entityinterfaces.ts/department.interface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class AllDepartments {
  constructor() { }
  async AllDepartments(department: string) {
    try {
      await messageBroker.sendMessage("read_department", department);
      // send message to the queue
      await messageBroker.listenForResponse("readed_department");

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
      console.log("error finding department : ", error);
      throw new CustomError(error.message, 500)
    }
  }
}

export default new AllDepartments()