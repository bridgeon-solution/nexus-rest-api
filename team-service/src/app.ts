import express, { Express } from 'express'
import cors from 'cors'
import messageBroker from './utils/messageBroker'
import SendmessageBroker from './controllers/getEmployee.controller'

const app: Express = express()

app.use(cors())
app.use(express.json())

const message: number = 1

export default app