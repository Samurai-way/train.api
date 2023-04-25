import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TrainDto } from '../dto/train.dto';
import { randomUUID } from 'crypto';
import { Train } from '@prisma/client';

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
        availablePlaces: dto.availablePlaces,
      },
    });
  }

  async findTrainById(id: string) {
    return this.prisma.train.findFirst({ where: { id } });
  }

  // getAll(fromPlace?: string, toPlace?: string) {
  //   const options: Prisma.TrainModelFindManyArgs = {
  //     select: {
  //       id: true,
  //       fromPlace: true,
  //       toPlace: true,
  //       departureTime: true,
  //       availablePlaces: true,
  //     },
  //     orderBy: {
  //       departureTime: 'asc',
  //       availablePlaces: 'desc',
  //     },
  //   }
  //
  //   if (fromPlace && toPlace) {
  //     options.where = {
  //       AND: [
  //         {
  //           fromPlace: { contains: fromPlace, mode: 'insensitive' },
  //           toPlace: { contains: toPlace, mode: 'insensitive' },
  //         },
  //       ],
  //     }
  //   } else if (fromPlace) {
  //     options.where = {
  //       fromPlace: { contains: fromPlace, mode: 'insensitive' },
  //     }
  //   } else if (toPlace) {
  //     options.where = {
  //       toPlace: { contains: toPlace, mode: 'insensitive' },
  //     }
  //   }
  //   return this.prisma.trainModel.findMany(options)
  // }
  async updateTrain(id: string, dto: TrainDto): Promise<Train> {
    return this.prisma.train.update({
      where: { id },
      data: {
        fromPlace: dto.fromPlace,
        departureTime: dto.departureTime,
        availablePlaces: dto.availablePlaces,
        toPlace: dto.toPlace,
      },
    });
  }
  async deleteTrain(id: string): Promise<Train> {
    return this.prisma.train.delete({ where: { id } });
  }
}
