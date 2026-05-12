import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule], // Aqui o HTTP ganha acesso aos Repositórios
  controllers: [], // Colocaremos os controllers aqui
  providers: [], // Colocaremos os Use Cases aqui
})
export class HttpModule {}
