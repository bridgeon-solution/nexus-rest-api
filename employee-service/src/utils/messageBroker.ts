import amqp from 'amqplib'

export class MessageBroker {
  channel: Promise<amqp.Channel>
  constructor() {
  }

  // private handleChannelError(Error) {
  //   console.error("Error with RabbitMQ Channel : ", Error)
  // }

  async Connect(): Promise<void> {
    console.log("Connecting to RabbitMQ");

    setTimeout(async () => {
      try {
        const connection: amqp.Connection = await amqp.connect('amqp://localhost');
        this.channel = connection.createChannel();
        (await this.channel).assertQueue("employee")
        console.log("Connected to RabbitMQ")
      } catch (error) {
        console.log("Failed to Connnect to RabbitMQ : ", error.message)
      }
    })
  }

  async publishMessage(queue, message): Promise<void> {
    this.Connect()
    if (!this.channel) {
      console.log("No RabbitMQ channel Available.");
      return;
    }
    try {
      (await this.channel).sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    } catch (error) {
      console.log("Error Sending RabbitMQ messages : ", error);
    }
  }

  async consumeMessage(queue, callback) {
    this.Connect()
    if (!this.channel) {
      console.log("No RabbitMQ Channel Available")
      return
    }
    try {
      (await this.channel).consume(queue, (message) => {
        if (!message) {
          console.log("Recieved null message from RabbitMQ");
          return;
        }
        const content = message.content.toString();
        const parsedContent = JSON.parse(content)
        callback(parsedContent);
      });
    } catch (error) {
      console.log(error)
    }
  }

}