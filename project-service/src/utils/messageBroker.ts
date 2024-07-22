import amqp, { connect } from 'amqplib'
import EventEmitter from 'events'
import CustomError from './customErrorHandler';


class MessageBroker {
  private connection: any;
  private channel: any;
  private eventEmitter: EventEmitter = new EventEmitter();
  private responseSent: boolean;
  constructor() {
    this.eventEmitter = new EventEmitter();
    this.responseSent = false
  }


  async Connect(): Promise<void> {
    console.log("Connecting to RabbitMQ");
    try {
      this.connection = await amqp.connect('amqp://localhost');
      this.channel = await this.connection.createChannel();
      console.log(`Connected RabbitMQ successfully`);
    } catch (error: any) {
      console.log("Failed to Connnect to RabbitMQ : ", error.message)
    }
  }

  async sendMessage(queue: string, message: any) {
    try {
      await this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    } catch (error) {
      console.log('Error Sending Message : ', error);
    }
  }

  async setupQueue(queueName: string) {
    try {
      await this.channel.assertQueue(queueName);
      console.log(`asserting Message ${queueName} queue`);
    } catch (error: any) {
      console.log('Error asserting queue', error)
    }
  }

  async listenForResponse(queueName: string) {
    await this.channel.consume(queueName, async (message: any) => {
      if (message !== null) {
        const response = message.content.toString();
        if (response) {
          try {
            const data = JSON.parse(response);
            if (data.status === 'success') {
              // console.log(`Recieved message from ${queueName} queue`, data);
              this.channel.ack(message);
              this.responseSent = true;
              this.eventEmitter.emit("dataRecieved", data);
            } else if (data.status === 'failed') {
              console.log(data)
              const error = new CustomError(`${data.message}`, 500)
              this.eventEmitter.emit(`dataRecievedError`, error);
              this.channel.ack(message)
            }
          } catch (error: any) {
            console.log(`Error processing ${queueName} response : `, error)
          }
        }
      }
    })
  }

  on(event: string, listener: (...args: any[]) => void) {
    this.eventEmitter.on(event, listener);
  }
  off(event: string, listener: (...args: any[]) => void) {
    this.eventEmitter.off(event, listener);
  }

  isResponseSent() {
    return this.responseSent
  }

  resetResponseFlag() {
    this.responseSent = false;
  }


  // async publishMessage(queuename, message): Promise<void> {
  //   if (!this.channel) {
  //     console.log("No RabbitMQ channel Available.");
  //     return;
  //   }
  //   try {
  //     await this.channel.assertQueue(queuename);
  //     this.queues[queuename]
  //   } catch (error) {

  //   }
  //   try {
  //     (await this.channel).sendToQueue(queuename, Buffer.from(JSON.stringify(message)));
  //   } catch (error) {
  //     console.log("Error Sending RabbitMQ messages : ", error);
  //   }
  // }

  // async consumeMessage(queue, callback) {
  //   this.Connect()
  //   if (!this.channel) {
  //     console.log("No RabbitMQ Channel Available")
  //     return
  //   }
  //   try {
  //     await this.channel.consume(queue, async (message) => {
  //       if (!message) {
  //         console.log("Recieved null message from RabbitMQ")
  //       }
  //       const content = message.content.toString();
  //       const parsedContent = JSON.parse(content)
  //       callback(parsedContent);
  //       await this.channel.ack(message)
  //     });

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

}

export default new MessageBroker()