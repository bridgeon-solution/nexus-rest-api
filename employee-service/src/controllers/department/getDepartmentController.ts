import { Department } from "@prisma/client";
import amqp from 'amqplib'
import getDepartmentUseCase from "../../usecases/departmentUseCases/getDepartmentUseCase";


let connection: amqp.Connection;
let channel: amqp.Channel;

async function connectAllDepartment() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');
    channel = await connection.createChannel();
    await channel.assertQueue("readed_department");
    console.log('Queue "readed_department" is ready.');
    allDepartmentByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const allDepartmentByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("read_department", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          try {
            const deletedDepartment: Department[] = await getDepartmentUseCase.getAllDepartments();
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("readed_department", Buffer.from(JSON.stringify({
              status: 'success',
              data: deletedDepartment
            })));
            await channel.ack(msg);
          } catch (error: any) {
            console.log('Error getting department : ', error)
            await channel.sendToQueue("readed_department", Buffer.from(JSON.stringify({
              status: 'failed',
              message: error.message
            })));
            await channel.ack(msg);
          }
        }
      }
    }, { noAck: false })
  } catch (error) {
    console.log('Error Listening department creation request : ', error)
  }
}

export {

  connectAllDepartment
} 