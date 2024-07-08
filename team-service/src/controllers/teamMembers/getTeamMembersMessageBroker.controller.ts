import messageBroker from "../../utils/messageBroker";

const listenForTeamInfo = async () => {
    await messageBroker.consumeMessage("project", async (data) => {
        console.log(data);
        // const main = { status: 'success', data: 'noth' }
        // messageBroker.sendMessage("projectResponse", main)
        // await getTeamMembersUseca    se.getTeamMembersForProject(data)
    })
};

export { listenForTeamInfo }