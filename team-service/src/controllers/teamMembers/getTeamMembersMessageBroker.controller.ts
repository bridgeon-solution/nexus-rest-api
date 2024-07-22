import getTeamMembersUsecase from "../../usecases/teamMembers/getTeamMembers.usecase";
import messageBroker from "../../utils/messageBroker";

const listenForTeamInfo = async () => {
    await messageBroker.consumeMessage("project", async (data) => {
        
        await getTeamMembersUsecase.getTeamMembersForProject(data)
    })
};

export { listenForTeamInfo }