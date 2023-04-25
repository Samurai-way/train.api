import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { Train } from '@prisma/client';
import { TrainDto } from './dto/train.dto';
import { TrainRepository } from './repository/train.repository';
import { FindTrainDto } from './dto/findTrainDto';

@Controller('train')
export class TrainController {
  constructor(private readonly TrainRepo: TrainRepository) {}

  @Post('/create')
  @HttpCode(204)
  async createTrip(@Body() dto: TrainDto): Promise<Train> {
    return this.TrainRepo.createTrain(dto);
  }

  @Get('')
  async getAllSelected(@Query() dto: FindTrainDto): Promise<Train[]> {
    return this.TrainRepo.findTrains(dto);
  }
}
