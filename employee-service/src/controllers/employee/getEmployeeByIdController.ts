import { Department } from "@prisma/client";
import amqp from 'amqplib'
import getEmployeeUseCase from "../../usecases/employeeUseCases/getEmployeeUseCase";
import { Employee } from "../../entities/entityInterfaces/Employee.interface";
let connection: amqp.Connection
let channel: amqp.Channel;

async function connectGetEmployeeId() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("readed_employeebyid");
    console.log('Queue "readed_employeebyid" is ready.');
    getEmployeeByIdFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const getEmployeeByIdFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("read_employeebyid", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          try {
            const employeeId: number = parseInt(parsedData)
            const employeeById:Employee = await getEmployeeUseCase.getEmployeeById(employeeId);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("readed_employeebyid", Buffer.from(JSON.stringify({
              status: "success",
              data: employeeById
            })));
            await channel.ack(msg);
          } catch (error: any) {
            console.log('Error finding employee : ', error.message)
            await channel.sendToQueue("readed_employeebyid", Buffer.from(JSON.stringify({
              status: 'failed',
              message: error.message
            })));
            await channel.ack(msg)
          }
        }
      }
    }, { noAck: false })
  } catch (error) {
    console.log('Error Listening to the request : ', error)
  }
}

export {
  connectGetEmployeeId,
  getEmployeeByIdFounder
} 