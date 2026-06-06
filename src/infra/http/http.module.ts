import { Module } from '@nestjs/common';
import { CreateSexualityUseCase } from 'src/application/useCases/createSexuality';
import { CreateGenderUseCase } from 'src/application/useCases/gender/createGender';
import { DeleteGenderUseCase } from 'src/application/useCases/gender/deleteGenderUseCase';
import { FindAllGendersUseCase } from 'src/application/useCases/gender/findAllGendersUseCase';
import { FindByIdGenderUseCase } from 'src/application/useCases/gender/findByIdGenderUseCase';
import { UpdateGenderUseCase } from 'src/application/useCases/gender/updateGenderUseCase';
import { CreatePersonUseCase } from 'src/domain/use-cases/createPersonUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreatePersonController } from 'src/infra/http/controllers/createPersonController';
import { CreateSexualityController } from 'src/infra/http/controllers/createSexualityController';
import { CreateGenderController } from 'src/infra/http/controllers/gender/createGenderController';
import { DeleteGenderController } from 'src/infra/http/controllers/gender/deleteGenderController';
import { FindAllGendersController } from 'src/infra/http/controllers/gender/findAllGendersController';
import { FindByIdGenderController } from 'src/infra/http/controllers/gender/findByIdGenderController';
import { UpdateGendersController } from 'src/infra/http/controllers/gender/updateGenderController';

@Module({
  imports: [DatabaseModule], // Aqui o HTTP ganha acesso aos Repositórios
  controllers: [
    CreatePersonController,
    CreateGenderController,
    CreateSexualityController,
    FindAllGendersController,
    UpdateGendersController,
    DeleteGenderController,
    FindByIdGenderController,
  ], // Colocaremos os controllers aqui
  providers: [
    CreatePersonUseCase,
    CreateGenderUseCase,
    CreateSexualityUseCase,
    FindAllGendersUseCase,
    UpdateGenderUseCase,
    DeleteGenderUseCase,
    FindByIdGenderUseCase,
  ], // Colocaremos os Use Cases aqui
})
export class HttpModule {}
