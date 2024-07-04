import { LeaveData } from "../../enitities/entityClasses/leaveData.interface";
import messageBroker from "../../utils/messageBroker";
import updateEmployeeUsecase from "../../usecases/employees/updateEmployee.usecase";

const listenForLeaveInfo = async () => {
    try {
        await messageBroker.listenForResponse('deduction');
        await messageBroker.consumeMessage("deduction", async(data:LeaveData)=>{
            if (data) {
                updateEmployeeUsecase.updateDeduction(data)
            }
        })
    } catch (error) {

    }
};

export { listenForLeaveInfo }