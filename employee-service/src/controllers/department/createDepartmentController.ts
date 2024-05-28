import { Department } from "@prisma/client";
import { Request, Response } from "express";
import { CreateDepartment } from "../../usecases/departmentUseCases/createDepartmentUseCase";
import amqp from 'amqplib'

const createDepartments = new CreateDepartment()

let connection: amqp.Connection
let channel: amqp.Channel;

async function connect() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("created_department");
    console.log('Queue "created_department" is ready.');
    createDepartmentByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const createDepartmentByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("create_department", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          try {
            const createdDepartment: Department = await createDepartments.createDepartment(parsedData);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("created_department", Buffer.from(JSON.stringify({
              status: "success",
              data: createdDepartment
            })));
            await channel.ack(msg);
          } catch (error: any) {
            console.log('Error Creating department : ', error.message)
            await channel.sendToQueue("created_department", Buffer.from(JSON.stringify({
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
  createDepartmentByFounder,
  connect
} 