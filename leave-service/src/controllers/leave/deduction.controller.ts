import approveOrRejectLeaveUseCase from "../../usecases/leave/approveOrRejectLeave.useCase";
import messageBroker from "../../utils/messageBroker";

const sendLeaveInfo = async () => {
    await messageBroker.sendMessage("deduction", 'all');
    
};

export { sendLeaveInfo }