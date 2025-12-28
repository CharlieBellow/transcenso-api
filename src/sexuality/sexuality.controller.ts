import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSexualityDto } from './dto/create-sexuality.dto';
import { UpdateSexualityDto } from './dto/update-sexuality.dto';
import { SexualityService } from './sexuality.service';

@Controller('sexuality')
export class SexualityController {
  constructor(private readonly sexualityService: SexualityService) {}

  @Post()
  create(@Body() createSexualityDto: CreateSexualityDto) {
    return this.sexualityService.create(createSexualityDto);
  }

  @Get()
  findAll() {
    return this.sexualityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexualityService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSexualityDto: UpdateSexualityDto,
  ) {
    return this.sexualityService.update(id, updateSexualityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sexualityService.remove(id);
  }
}
