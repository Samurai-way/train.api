import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TrainDto } from '../dto/train.dto';
import { randomUUID } from 'crypto';
import { Train } from '@prisma/client';
import { FindTrainDto } from '../dto/findTrainDto';

@Injectable()
export class TrainRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTrain(dto: TrainDto): Promise<Train> {
    return this.prisma.train.create({
      data: {
        id: randomUUID(),
        toPlace: dto.toPlace,
        fromPlace: dto.fromPlace,
        departureTime: dto.departureTime,
      },
    });
  }
  async findTrains(dto: FindTrainDto): Promise<Train[]> {
    return this.prisma.train.findMany({
      where: { fromPlace: dto.fromPlace, toPlace: dto.toPlace },
    });
  }
}
