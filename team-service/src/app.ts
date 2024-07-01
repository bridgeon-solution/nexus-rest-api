import express, { Express } from 'express'
import cors from 'cors'
import messageBroker from './utils/messageBroker'
import SendmessageBroker from './controllers/getEmployee.controller'
import teamRouter from './routes/team.routes'
import teamMembers from './routes/teamMembers.routes'

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/teams', teamRouter)
app.use('/api/v1/team-members', teamMembers)

export default app