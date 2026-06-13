import { Module } from '@nestjs/common';
import { CreateGenderUseCase } from 'src/application/useCases/gender/createGenderUseCase';
import { DeleteGenderUseCase } from 'src/application/useCases/gender/deleteGenderUseCase';
import { FindAllGendersUseCase } from 'src/application/useCases/gender/findAllGendersUseCase';
import { FindByAcronymGenderUseCase } from 'src/application/useCases/gender/findByAcronymGenderUseCase';
import { FindByIdGenderUseCase } from 'src/application/useCases/gender/findByIdGenderUseCase';
import { FindBySlugGenderUseCase } from 'src/application/useCases/gender/findBySlugGenderUseCase';
import { UpdateGenderUseCase } from 'src/application/useCases/gender/updateGenderUseCase';
import { CreatePersonUseCase } from 'src/application/useCases/person/createPersonUseCase';
import { DeletePersonUseCase } from 'src/application/useCases/person/deletePersonUseCase';
import { FindAllPersonUseCase } from 'src/application/useCases/person/findAllPersonUseCase';
import { FindByCpfPersonUseCase } from 'src/application/useCases/person/findByCpfPersonUseCase';
import { FindByIdPersonUseCase } from 'src/application/useCases/person/findByIdPersonUseCase';
import { UpdatePersonUseCase } from 'src/application/useCases/person/updatePersonUseCase';
import { CreateSexualityUseCase } from 'src/application/useCases/sexuality/createSexualityUseCase';
import { DeleteSexualityUseCase } from 'src/application/useCases/sexuality/deleteSexualityUseCase';
import { FindAllSexualityUseCase } from 'src/application/useCases/sexuality/findAllSexualityUseCase';
import { FindByAcronymSexualityUseCase } from 'src/application/useCases/sexuality/findByAcronymSexualityUseCase';
import { FindByIdSexualityUseCase } from 'src/application/useCases/sexuality/findByIdSexualityUseCase';
import { FindBySlugSexualityUseCase } from 'src/application/useCases/sexuality/findBySlugSexualityUseCase';

import { DatabaseModule } from 'src/infra/database/database.module';

import { CreateGenderController } from 'src/infra/http/controllers/gender/createGenderController';
import { DeleteGenderController } from 'src/infra/http/controllers/gender/deleteGenderController';
import { FindAllGendersController } from 'src/infra/http/controllers/gender/findAllGendersController';
import { FindByAcronymGenderController } from 'src/infra/http/controllers/gender/findByAcronymGenderController';
import { FindByIdGenderController } from 'src/infra/http/controllers/gender/findByIdGenderController';
import { FindBySlugGenderController } from 'src/infra/http/controllers/gender/findBySlugGenderController';
import { UpdateGendersController } from 'src/infra/http/controllers/gender/updateGenderController';
import { CreatePersonController } from 'src/infra/http/controllers/person/createPersonController';
import { DeletePersonController } from 'src/infra/http/controllers/person/deletePersonController';
import { FindAllPersonController } from 'src/infra/http/controllers/person/findAllPersonController';
import { FindByCpfPersonController } from 'src/infra/http/controllers/person/findByCpfPersonController';
import { FindByIdPersonController } from 'src/infra/http/controllers/person/findByIdPersonController';
import { UpdatePersonController } from 'src/infra/http/controllers/person/updatePersonControllrt';
import { CreateSexualityController } from 'src/infra/http/controllers/sexuality/createSexualityController';
import { DeleteSexualityController } from 'src/infra/http/controllers/sexuality/deleteSexualityController';
import { FindAllSexualityController } from 'src/infra/http/controllers/sexuality/findAllSexualityController';
import { FindByAcronymSexualityController } from 'src/infra/http/controllers/sexuality/findByAcronymSexualityController';
import { FindByIdSexualityController } from 'src/infra/http/controllers/sexuality/findByIdSexualityController';
import { FindBySlugSexualityController } from 'src/infra/http/controllers/sexuality/findBySlugSexualityController';

@Module({
  imports: [DatabaseModule], // Aqui o HTTP ganha acesso aos Repositórios
  controllers: [
    // Person
    CreatePersonController,
    FindByCpfPersonController,
    UpdatePersonController,
    DeletePersonController,
    FindAllPersonController,
    FindByIdPersonController,

    // Gender
    CreateGenderController,
    DeleteGenderController,
    FindAllGendersController,
    FindByAcronymGenderController,
    FindByIdGenderController,
    FindBySlugGenderController,
    UpdateGendersController,
    // Sexuality
    CreateSexualityController,
    DeleteSexualityController,
    FindAllSexualityController,
    FindByAcronymSexualityController,
    FindByIdSexualityController,
    FindBySlugSexualityController,
  ], // Colocaremos os controllers aqui
  providers: [
    // Gender
    CreateGenderUseCase,
    DeleteGenderUseCase,
    FindAllGendersUseCase,
    FindByAcronymGenderUseCase,
    FindBySlugGenderUseCase,
    FindByIdGenderUseCase,
    UpdateGenderUseCase,
    // Person
    CreatePersonUseCase,
    DeletePersonUseCase,
    FindAllPersonUseCase,
    FindByCpfPersonUseCase,
    FindByIdPersonUseCase,
    UpdatePersonUseCase,
    // Sexuality
    CreateSexualityUseCase,
    DeleteSexualityUseCase,
    FindAllSexualityUseCase,
    FindByAcronymSexualityUseCase,
    FindBySlugSexualityUseCase,
    FindByIdSexualityUseCase,
  ], // Colocaremos os Use Cases aqui
})
export class HttpModule {}
