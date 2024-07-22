import messageBroker from "../utils/messageBroker"

const SendmessageBroker = async () => {
  const message: number = 59  
  await messageBroker.sendMessage("getEmployeeById", message)
}

export default SendmessageBroker