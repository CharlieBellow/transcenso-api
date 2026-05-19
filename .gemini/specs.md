# TransCenso API: Especificações do Porjeto

Este documento descreve a arquitetura e as principais decisões de design da **TransCenso API**, um projeto construído para mapear e gerenciar dados relacionados a pessoas Trans.


### 1. Arquitetura

A TransCenso API adota a arquitetura **Domain-Driven Design (DDD)**, organizada em camadas para garantir a separação de responsabilidades, manutenibilidade e escalabilidade.

#### 1.1. Camadas Principais:

*   **Domínio (Domain Layer):**
    *   **Propósito:** Contém a lógica de negócio central e as regras mais importantes do sistema. É a camada mais protegida e independente de tecnologias externas.
    *   **Componentes:**
        *   **Entidades:** Representam conceitos de negócio com identidade e ciclo de vida (ex: `Person`, `Gender`, `Sexuality`). Elas encapsulam dados e comportamentos.
        *   **Interfaces de Repositório (Contratos):** Definem as operações necessárias para persistir e recuperar Entidades, abstraindo a tecnologia de armazenamento (ex: `PersonRepository`, `GenderRepository`).

*   **Aplicação (Application Layer):**
    *   **Propósito:** Orquestra as Entidades e Repositórios para executar casos de uso específicos da aplicação. É a camada que coordena as ações para atender às solicitações do usuário.
    *   **Componentes:**
        *   **Casos de Uso (Use Cases):** Classes que implementam fluxos de trabalho específicos, como `CreatePersonUseCase`. Eles validam entradas, aplicam regras de negócio e gerenciam transações.
        *   **DTOs (Data Transfer Objects):** Objetos usados para transferir dados entre as camadas, especialmente para a interface do usuário. A montagem de DTOs complexos é responsabilidade dos Use Cases.

*   **Infraestrutura (Infrastructure Layer):**
    *   **Propósito:** Implementa os detalhes técnicos de persistência, comunicação externa e outras preocupações técnicas.
    *   **Componentes:**
        *   **Implementações de Repositório:** Classes que implementam as interfaces de repositório do domínio, usando tecnologias específicas (ex: `PrismaGenderRepository`).
        *   **Mappers:** Responsáveis por traduzir dados entre as Entidades de Domínio e os modelos de dados da tecnologia de persistência (ex: `PrismaGenderMapper`).
        *   **`PrismaService`:** Gerencia a conexão e as operações com o banco de dados via Prisma ORM.

### 2. Tecnologias Utilizadas

*   **Framework:** NestJS (para construção da API e injeção de dependência).
*   **Linguagem:** TypeScript.
*   **ORM:** Prisma (para interação com o banco de dados PostgreSQL).
*   **Banco de Dados:** PostgreSQL (executado via Docker).
*   **Ambiente de Desenvolvimento:** Docker Compose, Prisma Studio, DBeaver.

### 3. Decisões de Design e Boas Práticas

*   **Entidades Ricas:** `Gender` e `Sexuality` são tratadas como entidades de domínio para permitir maior rastreabilidade e flexibilidade (ex: adição de `slugs`).
*   **Validação de Integridade:** Use Cases garantem a integridade referencial (ex: `genderId` e `sexualityId` válidos ao criar uma `Person`) e regras de negócio (ex: CPF único).
*   **Desacoplamento:** O uso de interfaces de repositório e mappers garante que a lógica de negócio (Domínio e Aplicação) seja independente da tecnologia de banco de dados, facilitando futuras mudanças.
*   **Composição de DTOs:** A responsabilidade de "enriquecer" os dados (transformar IDs em objetos completos para o frontend) é do Use Case, que tem acesso a todos os repositórios necessários.
*   **Padronização:** Adoção de `camelCase` para nomenclatura de arquivos e código para manter a consistência.
*   **Gestão de Contexto:** Utilização de "Bilhetes de Partida" nos diários de bordo para documentar o estado do projeto, decisões e próximos passos, minimizando a perda de contexto.