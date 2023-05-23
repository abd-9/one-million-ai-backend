import { LINK_TYPES } from '@/interfaces/link.interface';
import { Expose } from 'class-transformer';
import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';

export class CreateLinkDTO {
  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  imageUrl: string;

  // @IsBoolean()
  // active: boolean;

  @IsOptional()
  @IsNumber()
  visitsCount: number;

  @IsOptional()
  @IsNumber()
  higet?: number;

  @IsOptional()
  @IsNumber()
  width?: number;

  @IsOptional()
  @IsNumber()
  pixels?: number;

  @IsOptional()
  @Expose({ name: 'userId' })
  @IsString()
  user: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  paymentId: string;

  @IsEnum(LINK_TYPES)
  type: LINK_TYPES;

  // @IsEnum(LINK_STATUS)
  // status: LINK_STATUS;

  // @IsNumber()
  // rank: number;
}
