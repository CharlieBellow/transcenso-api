import { Person } from 'src/domain/entities/Person';

// O Repositório é o Porteiro do seu Banco de Dados.

// O seu Banco de Dados (Prisma, Postgres, etc.) é um lugar cheio de tabelas e dados brutos.

// A sua Entidade (a classe Person que você criou) é um objeto inteligente com regras.

// O Repositório é quem faz a ponte entre esses dois. Ele pega o "dado bruto" do banco e transforma na sua "Entidade" (e vice-versa).

// "Olha, eu ainda não decidi qual banco de dados vou usar. Mas eu aviso que, seja qual for o banco, o meu 'Porteiro de Pessoas' precisa saber fazer essas buscas (CPF, RG, ID) e saber salvar (Create).";
// import { Person } from 'src/domain/entities/Person';

export interface PersonRepository {
  create(person: Person): Promise<void>;
  findById(id: string): Promise<Person | null>;
  findBySlug(slug: string): Promise<Person | null>;
  findByCpf(cpf: string): Promise<Person | null>;
  findByRg(rg: string): Promise<Person | null>;
  listAll(): Promise<Person[]>;
}
