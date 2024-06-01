import amqp from 'amqplib'
import updateEmployeeUseCase from "../../usecases/employeeUseCases/updateEmployeeUseCase";
import { Employee, UpdateEmployees } from "../../entities/entityInterfaces/Employee.interface";

let connection: amqp.Connection;
let channel: amqp.Channel;

async function updateEmployeeId() {
  try {
    const amqpServer = 'amqp://localhost';
    connection = await amqp.connect(amqpServer);
    console.log('Connected to RabbitMQ successfully.');

    channel = await connection.createChannel();
    await channel.assertQueue("updated_employee");
    console.log('Queue "updated_employee" is ready.');
    updateEmployeeByFounder()
  } catch (error) {
    console.log('Error connecting to RabbitMQ:', error);
  }
}


const updateEmployeeByFounder = async () => {
  if (!channel) {
    console.log('No RabbitMQ channel available')
    return
  }
  try {
    await channel.consume("update_employee", async (msg: any) => {
      if (msg !== null) {
        const content = msg.content.toString()
        //  convert to string first
        if (content) {
          const parsedData = JSON.parse(content)
          const departmentData: UpdateEmployees = parsedData
          try {
            const updatedDepartment: Employee | null = await updateEmployeeUseCase.updateEmployee(departmentData);
            // call the create department from use cases. (business logic)
            await channel.sendToQueue("updated_employee", Buffer.from(JSON.stringify({
              status: 'success',
              data: updatedDepartment
            })))
            await channel.ack(msg)
          } catch (error: any) {
            console.log('Error updating department : ', error);
            await channel.sendToQueue("updated_employee", Buffer.from(JSON.stringify({
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
  updateEmployeeId
} 