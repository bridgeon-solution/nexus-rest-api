import { Department } from "@prisma/client";
import amqp from 'amqplib'
import { UpdateDepartments } from "../../entities/entityInterfaces/Department.interface";
import updateDepartmentUseCases from "../../usecases/departmentUseCases/updateDepartmentUseCases";

let connection: amqp.Connection;
let channel: amqp.Channel;

async function updateDepartmentId() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("updated_department");
    console.log('Queue "updated_department" is ready.');
    updateDepartmentByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const updateDepartmentByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("update_department", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          const departmentData: UpdateDepartments = parsedData
          try {
            const updatedDepartment: Department | null = await updateDepartmentUseCases.updateDepartment(departmentData);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("updated_department", Buffer.from(JSON.stringify({
              status: 'success',
              data: updatedDepartment
            })))
            await channel.ack(msg)
          } catch (error: any) {
            console.log('Error updating department : ', error);
            await channel.sendToQueue("updated_department", Buffer.from(JSON.stringify({
              status: 'failed',
              message: error.message
            })));
            await channel.ack(msg)
          }
        }
      }
    }, { noAck: false })
  } catch (error) {
    console.log('Error Listening department updation request : ', error)
  }
}

export {
  updateDepartmentId
} 