import { Employee } from "../../entities/entityinterfaces.ts/employee.inteface";
import CustomError from "../../utils/customErrorHandler";
import messageBroker from "../../utils/messageBroker";


class CreateEmployee {
  constructor() { }
  async createEmployee(Employee: Employee) {
    
    try {
      // console.log(Employee);
      await messageBroker.sendMessage("create_employee", Employee);
      // send message to the queue
      await messageBroker.listenForResponse("created_employee");
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
          reject(new CustomError(error.message, 500))
        }
        messageBroker.on("dataRecieved", eventListener);
        messageBroker.on("dataRecievedError", errorListener);
        setTimeout(() => {
          messageBroker.off("dataRecieved", eventListener);
          messageBroker.off("dataRecievedError", errorListener);
          reject(new CustomError("Employee Creation Response timed out", 504))
        }, 5000)
      });
      return await responsePromise
    } catch (error) {
      console.log("error creating employee : ", error);
      throw new CustomError(error.message, 500);
    }
  }
}

export default new CreateEmployee()