import { Request, Response } from "express";
import Department from "../../entities/entityinterfaces.ts/department.interface";
import amqp from "amqplib";
import EventEmitter from 'events'
const eventEmitter = new EventEmitter();

let connection: amqp.Connection;
let channel: amqp.Channel;
let responseSent = false //flag to track response


async function connect() {
  try {
    const amqpServer = "amqp://localhost";
    connection = await amqp.connect(amqpServer);
    console.log("Connected to RabbitMQ successfully.");

    channel = await connection.createChannel();
    await channel.assertQueue("department");
    console.log('Queue "department" is ready.');

    await channel.consume("department", async (msg) => {
      if (msg !== null) {
        const content = msg.content.toString();
        if (content) {
          try {
            const data = JSON.parse(content);
            console.log("Received message from department queue:", data);
            channel.ack(msg);
            responseSent = true
            eventEmitter.emit("departmentDataReceived", data);
          } catch (error) {
            console.error('Error processing department creation response : ', error);
          }

        }
      }
    });
  } catch (error) {
    console.log("Error connecting to RabbitMQ:", error);
  }
}

const createDepartment = async (req: Request, res: Response) => {
  try {
    const department: Department = req.body;
    await channel.sendToQueue("create_department", Buffer.from(JSON.stringify(department)));

    const eventListener = (data) => {
      res.status(201).json({
        status: "success",
        data: data,
      });
      eventEmitter.off("departmentDataReceived", eventListener);
    };

    eventEmitter.on("departmentDataReceived", eventListener);

    setTimeout(() => {
      if (!responseSent) {
        res.status(500).json({
          status: "failed",
          message: "department creation failed",
        });
      }
      eventEmitter.off("departmentDataReceived", eventListener);
    }, 5000); // Timeout after 5 seconds
  } catch (error) {
    console.log("Error Sending Message:", error);
    res.status(500).json({
      status: "Error Sending department creation request",
    });
  }
};

export { createDepartment, connect };
