import express from 'express'
import cors from 'cors';
import { Router, Request, Response } from 'express';
import { logger } from './middlewares/logger';
import { pinoHttp } from 'pino-http';
import hercai_routes from './services/hercai/hercai'

const app = express();

const route = Router()

app.use('/hercai', hercai_routes)

app.use(cors());
app.use(pinoHttp({ logger}))
app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

app.listen(3333, () => logger.info('server running on port 3333'))