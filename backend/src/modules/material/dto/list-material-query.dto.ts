import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class ListMaterialQueryDto {
  @IsString()
  @IsNotEmpty()
  projectId!: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @IsInt()
  @Min(1)
  @IsOptional()
  pageSize?: number = 20;
}
