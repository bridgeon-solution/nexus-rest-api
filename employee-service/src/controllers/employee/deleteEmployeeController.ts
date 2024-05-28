import { Department } from "@prisma/client";
import amqp from 'amqplib'
import deleteEmployeeUseCase from "../../usecases/employeeUseCases/deleteEmployeeUseCase";
import { Employee } from "../../entities/entityInterfaces/Employee.interface";

let connection: amqp.Connection
let channel: amqp.Channel;

async function connectDeleteEmployee() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("deleted_employee");
    console.log('Queue "deleted_employee" is ready.');
    deleteEmployeeByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const deleteEmployeeByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("delete_employee", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          try {
            const employeeId: number = parseInt(parsedData)
            const createdEmployee: Employee = await deleteEmployeeUseCase.deleteEmployee(employeeId);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("deleted_employee", Buffer.from(JSON.stringify({
              status: "success",
              data: createdEmployee
            })));
            await channel.ack(msg);
          } catch (error: any) {
            console.log('Error deleting employee : ', error.message)
            await channel.sendToQueue("deleted_employee", Buffer.from(JSON.stringify({
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
  deleteEmployeeByFounder,
  connectDeleteEmployee
} 