import express, { Express } from 'express'
import cors from 'cors'
import projectRouter from './routes/project.routes'
import taskRoutes from './routes/tasks.routes'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/projects', projectRouter)
app.use('/api/v1/tasks', taskRoutes)
export default app