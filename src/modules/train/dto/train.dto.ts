import { IsString } from 'class-validator';

export class TrainDto {
  @IsString()
  fromPlace: string;
  @IsString()
  toPlace: string;
  @IsString()
  departureTime: string;
  @IsString()
  availablePlaces: string;
}
