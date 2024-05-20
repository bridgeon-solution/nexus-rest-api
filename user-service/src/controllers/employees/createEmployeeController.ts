import { Request, Response } from "express";
import { MessageBroker } from "../../utils/messageBroker";
import amqp from 'amqplib'
const messageBroker = new MessageBroker();
const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = req.body;
    console.log(req.body)
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel()
    await channel.assertQueue("employee", { durable: true })
    channel.sendToQueue("employee", Buffer.from(JSON.stringify(employee)));
    console.log(`Message send : `, employee);

    // send message through rabbitMQ
    // await messageBroker.consumeMessage("employees", (data) => {
    //   console.log(JSON.parse(JSON.stringify(data)))
    // })
  } catch (error) {
    console.log("Error creating Employee : ", error)
  }
}

export default createEmployee