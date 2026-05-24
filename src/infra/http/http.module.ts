import { Module } from '@nestjs/common';
import { CreatePersonUseCase } from 'src/domain/use-cases/createPersonUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreatePersonController } from 'src/infra/http/controllers/createPersonController';

@Module({
  imports: [DatabaseModule], // Aqui o HTTP ganha acesso aos Repositórios
  controllers: [CreatePersonController], // Colocaremos os controllers aqui
  providers: [CreatePersonUseCase], // Colocaremos os Use Cases aqui
})
export class HttpModule {}
