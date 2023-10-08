import express from 'express';
import * as dotenv from 'dotenv';
import { rabbitMqService } from './services/rabbitmq';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
  });
});

app.post('/messages', (req, res) => {});

rabbitMqService.initiateConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
