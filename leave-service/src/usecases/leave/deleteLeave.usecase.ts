import leaveRepository from "../../repositories/leave.repository"
import messageBroker from "../../utils/messageBroker"

class DeleteLeave {
    async deleteLeave() {
        messageBroker.consumeMessage("deleting", async (id: number) => {
            await leaveRepository.deleteLeave(id)
        })
    }
}

export default new DeleteLeave()