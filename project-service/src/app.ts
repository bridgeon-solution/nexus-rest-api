import express, { Express } from 'express'
import cors from 'cors'
import projectRouter from './routes/project.routes'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/projects', projectRouter)

export default app