import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

const PORT = process.env.PORT || 3000;

async function start() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
  });
  await app.listen(PORT, () => {
    console.log(`[nest main] -> server started on http://localhost:${PORT}`);
  });
}
start();
