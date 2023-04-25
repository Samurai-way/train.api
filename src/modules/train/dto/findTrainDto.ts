import { IsString } from 'class-validator';

export class FindTrainDto {
  @IsString()
  fromPlace: string;
  @IsString()
  toPlace: string;
}
