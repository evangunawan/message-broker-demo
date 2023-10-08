import * as amqp from 'amqplib';

class RabbitMqService {
  private static _instance: RabbitMqService;
  private _connection: amqp.Connection | null = null;

  constructor() {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new RabbitMqService();
    }
    return this._instance;
  }

  public async initiateConnection() {
    if (this._connection !== null) return this._connection;
    this._connection = await amqp.connect({
      hostname: process.env.RABBITMQ_HOST,
      username: process.env.RABBITMQ_USER,
      password: process.env.RABBITMQ_PASSWORD,
    });
    return this._connection;
  }
}

export const rabbitMqService = RabbitMqService.getInstance();
