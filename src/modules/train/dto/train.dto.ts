import { IsString } from 'class-validator';
import { FindTrainDto } from './findTrainDto';

export class TrainDto extends FindTrainDto {
  @IsString()
  departureTime: string;
}
