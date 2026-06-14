import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando semeadura do banco de dados...');

  const homemTrans = await prisma.gender.upsert({
    where: { slug: 'homem-trans' },
    update: {},
    create: {
      title: 'Homem Trans',
      acronym: 'HTR',
      slug: 'homem-trans',
      description:
        'Pessoa que foi atribuída ao gênero feminino ao nascer, mas se identifica como homem.',
    },
  });

  const bissexual = await prisma.sexuality.upsert({
    where: { slug: 'bissexual' },
    update: {},
    create: {
      title: 'Bissexual',
      acronym: 'BIS',
      slug: 'bissexual',
      description: 'Atração afetiva e/ou sexual por mais de um gênero.',
    },
  });

  console.log('✅ Gêneros e Sexualidades populados com sucesso.');

  const pessoaTeste = await prisma.person.upsert({
    where: { cpf: '12345678901' },
    update: {},
    create: {
      civilName: 'Charlie da Silva',
      socialName: '',
      birthDate: new Date('1995-05-15'),
      cpf: '12345678901',
      rg: 'MG1234567',
      pronouns: 'HE_HIM',
      slug: 'charlie-silva',
      genderId: homemTrans.id,
      sexualityId: bissexual.id,
    },
  });

  console.log(`✅ Pessoa de teste criada: ${pessoaTeste.socialName}`);
  console.log('🌱 Semeadura finalizada com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro ao rodar o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
