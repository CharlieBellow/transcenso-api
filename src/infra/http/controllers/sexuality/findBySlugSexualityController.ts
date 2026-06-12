import { Controller, Get, Param } from '@nestjs/common';
import { FindBySlugSexualityUseCase } from 'src/application/useCases/sexuality/findBySlugSexualityUseCase';

@Controller('sexualities')
export class FindBySlugSexualityController {
  constructor(
    private readonly findBySlugSexualityUseCase: FindBySlugSexualityUseCase,
  ) {}

  @Get('slug/:slug')
  async handle(@Param('slug') slug: string) {
    const sexuality = await this.findBySlugSexualityUseCase.execute(slug);
    return sexuality;
  }
}
