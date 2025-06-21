/* eslint-disable */
import { IsBoolean, IsOptional } from 'class-validator';
export class UsersDto {
  @IsOptional()
  @IsBoolean()
  isMArried: boolean;
}
