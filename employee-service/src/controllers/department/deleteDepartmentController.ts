import { Department } from "@prisma/client";
import { Request, Response } from "express";
import { CreateDepartment } from "../../usecases/departmentUseCases/createDepartmentUseCase";
import amqp from 'amqplib'
import { DeleteDepartment } from "../../usecases/departmentUseCases/deleteDepartmentUseCases";

const deleteDepartments = new DeleteDepartment()

let connection: amqp.Connection
let channel: amqp.Channel;

async function connectDeleteDepartment() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("deleted_department");
    console.log('Queue "deleted_department" is ready.');
    deleteDepartmentByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const deleteDepartmentByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("delete_department", async (msg: any) => {
      if (msg !== null) {
        channel.ack(msg)
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          const departmentId = parseInt(parsedData)
          try {
            const deletedDepartment: Department | null = await deleteDepartments.deleteDepartment(departmentId);
            // call the create department from use cases. (business logic)
            if (!deletedDepartment) {
              await channel.sendToQueue("deleted_department", Buffer.from(JSON.stringify({
                status: 'failed',
                message: 'Record to delete does not exists'
              })))
            }
            await channel.sendToQueue("deleted_department", Buffer.from(JSON.stringify({
              status: 'success',
              data: deletedDepartment
            })));
          } catch (error: any) {
            console.log('Error Deleting department : ', error)
            await channel.sendToQueue("deleted_department", Buffer.from(JSON.stringify({
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
  deleteDepartmentByFounder,
  connectDeleteDepartment
} 