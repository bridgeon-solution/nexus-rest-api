import { Server } from "socket.io";
import app from "./app";
import http from 'http'
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import sockets from "./socket/routes";
import dbConnection from "./databases/connection/dbConnection";

dbConnection()

const httpServer = http.createServer(app)

const io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

io.on("connection", (socket) => {
  sockets(socket, io)
})

httpServer.listen(5000, () => {
  console.log(`Chat service is listening to port 5000`)
})