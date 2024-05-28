import { Department, Employee } from "@prisma/client";
import createEmployeeUseCase from "../../usecases/employeeUseCases/createEmployeeUseCase";
import amqp from 'amqplib'
import extractErrorMessage from "../../utils/extractErrorMessage";


let connection: amqp.Connection
let channel: amqp.Channel;

async function connectCreateEmployee() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("created_employee");
    console.log('Queue "created_employee" is ready.');
    createEmployeeByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const createEmployeeByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("create_employee", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          try {
            const createdEmployee: Employee = await createEmployeeUseCase.createEmployee(parsedData);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("created_employee", Buffer.from(JSON.stringify({
              status: "success",
              data: createdEmployee
            })));
            await channel.ack(msg);
          } catch (error: any) {
            console.log('Error Creating employee : ', error.message)
            const extractError = extractErrorMessage(error.message)
            await channel.sendToQueue("created_employee", Buffer.from(JSON.stringify({
              status: 'failed',
              message: extractError
            })));
            await channel.ack(msg)
          }
        }
      }
    }, { noAck: false })
  } catch (error) {
    console.log('Error Listening department creation request : ', error)
  }
}

export {
  createEmployeeByFounder,
  connectCreateEmployee
} 