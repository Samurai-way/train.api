import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TrainDto } from './dto/train.dto';

@Controller('train')
export class TrainController {
  constructor() {} // private readonly trainService: TrainService

  @Post('')
  @HttpCode(200)
  async toggleFavorite(@Body() dto: TrainDto) {
    // return this.trainService.create(dto);
  }

  @Get(':id')
  async getProfile(@Param('id') id: string) {
    // return this.trainService.getById(id);
  }

  @Get('')
  async getAllSelected(
    @Query('fromPlace') fromPlace: string,
    @Query('toPlace') toPlace: string,
  ) {
    // return this.trainService.getAll(fromPlace, toPlace);
  }

  @Put(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() dto: TrainDto) {
    // return this.trainService.updateTrain(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // const deletedDoc = await this.trainService.delete(id);
    // if (!deletedDoc) throw new NotFoundException('User not found');
  }
}
