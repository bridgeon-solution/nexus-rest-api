import { Request, Response } from "express";
import { CreateEmployee } from "../../usecases/employeeUsecases/createEmployeeUseCase";
import { MessageBroker } from "../../utils/messageBroker";
import amqp from 'amqplib'

const createEmployees = new CreateEmployee()
// const messageBroker = new MessageBroker()
const createEmployee = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = connection.createChannel();
    (await channel).assertQueue("employee", { durable: true })
    console.log(`Waiting for the messages from queue : employee`);
    (await channel).consume("employee", (msg) => {
      console.log(`Recieved the message, Message is : ${msg?.content}`)
    }, { noAck: true })

    // const createdEmployee = await createEmployees.createEmployee(employeeDatas)
    // if (!createdEmployee) {

    // } else {

    // }
  } catch (error) {
    console.log(error)
  }
}

export default createEmployee