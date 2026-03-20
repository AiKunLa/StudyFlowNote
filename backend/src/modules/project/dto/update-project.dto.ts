import { IsDateString, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  goal?: string;

  @IsDateString()
  @IsOptional()
  examDate?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  dailyTimeBudget?: number;

  @IsString()
  @IsOptional()
  mode?: string;
}
