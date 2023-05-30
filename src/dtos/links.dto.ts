import { LINK_TYPES } from '@/interfaces/link.interface';
import { Expose } from 'class-transformer';
import { IsString, IsOptional, IsNumber, IsEnum, IsArray } from 'class-validator';

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
  @IsArray()
  tags: string[];

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
export class LinkFilterDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsArray()
  tags: string[];

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(LINK_TYPES)
  type: LINK_TYPES;
}
