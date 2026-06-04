import { Module } from '@nestjs/common';
import { CreateGenderUseCase } from 'src/application/useCases/createGender';
import { CreateSexualityUseCase } from 'src/application/useCases/createSexuality';
import { CreatePersonUseCase } from 'src/domain/use-cases/createPersonUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateGenderController } from 'src/infra/http/controllers/createGenderController';
import { CreatePersonController } from 'src/infra/http/controllers/createPersonController';
import { CreateSexualityController } from 'src/infra/http/controllers/createSexualityController';

@Module({
  imports: [DatabaseModule], // Aqui o HTTP ganha acesso aos Repositórios
  controllers: [
    CreatePersonController,
    CreateGenderController,
    CreateSexualityController,
  ], // Colocaremos os controllers aqui
  providers: [CreatePersonUseCase, CreateGenderUseCase, CreateSexualityUseCase], // Colocaremos os Use Cases aqui
})
export class HttpModule {}
