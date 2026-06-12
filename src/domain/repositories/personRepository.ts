import { Person } from 'src/domain/entities/person';

// O Repositório é o Porteiro do seu Banco de Dados.

// O seu Banco de Dados (Prisma, Postgres, etc.) é um lugar cheio de tabelas e dados brutos.

// A sua Entidade (a classe Person que você criou) é um objeto inteligente com regras.

// O Repositório é quem faz a ponte entre esses dois. Ele pega o "dado bruto" do banco e transforma na sua "Entidade" (e vice-versa).

// "Olha, eu ainda não decidi qual banco de dados vou usar. Mas eu aviso que, seja qual for o banco, o meu 'Porteiro de Pessoas' precisa saber fazer essas buscas (CPF, RG, ID) e saber salvar (Create).";
// import { Person } from 'src/domain/entities/Person';

export abstract class PersonRepository {
  abstract create(person: Person): Promise<void>;
  abstract findById(id: string): Promise<Person | null>;
  abstract findBySlug(slug: string): Promise<Person | null>;
  abstract findByCpf(cpf: string): Promise<Person | null>;
  abstract findByRg(rg: string): Promise<Person | null>;
  abstract listAll(): Promise<Person[]>;
  abstract update(person: Person): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
