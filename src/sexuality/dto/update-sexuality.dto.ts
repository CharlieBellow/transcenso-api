import { PartialType } from '@nestjs/mapped-types';
import { CreateSexualityDto } from './create-sexuality.dto';

export class UpdateSexualityDto extends PartialType(CreateSexualityDto) {}
