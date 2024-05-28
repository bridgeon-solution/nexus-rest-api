import { Department } from "@prisma/client";
import amqp from 'amqplib'
import getDepartmentUseCase from "../../usecases/departmentUseCases/getDepartmentUseCase";


let connection: amqp.Connection;
let channel: amqp.Channel;

async function connectDepartmentId() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("readed_departmentId");
    console.log('Queue "readed_departmentId" is ready.');
    DepartmentByIdFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const DepartmentByIdFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("read_departmentbyid", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          const departmentId = parseInt(parsedData)
          try {
            const deletedDepartment: Department | null = await getDepartmentUseCase.getDepartmentById(departmentId);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("readed_departmentId", Buffer.from(JSON.stringify({
              status: 'success',
              data: deletedDepartment
            })))
            await channel.ack(msg)
          } catch (error: any) {
            console.log('Error getting department : ', error);
            await channel.sendToQueue("readed_departmentId", Buffer.from(JSON.stringify({
              status: 'failed',
              message: error.message
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
  connectDepartmentId
} 