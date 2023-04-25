import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

const PORT = process.env.PORT || 3000;

async function start() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'https://instagram-ui-nine.vercel.app/',
        'http://localhost:3000',
      ],
      credentials: true,
    },
  });
  await app.listen(PORT, () => {
    console.log(`[nest main] -> server started on http://localhost:${PORT}`);
  });
}
start();
