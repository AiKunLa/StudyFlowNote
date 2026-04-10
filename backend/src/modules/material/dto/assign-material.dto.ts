import { IsNotEmpty, IsString } from 'class-validator';

export class AssignMaterialDto {
  @IsNotEmpty()
  @IsString()
  projectId: string;
}