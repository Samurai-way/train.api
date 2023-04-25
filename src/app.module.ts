import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { TrainRepository } from './modules/train/repository/train.repository';
import { TrainController } from './modules/train/train.controller';

const services = [AppService, PrismaService];
const repositories = [TrainRepository];
const useCases = [];
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, TrainController],
  providers: [...services, ...repositories],
})
export class AppModule {}
