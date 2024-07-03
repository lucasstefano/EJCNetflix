import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Deleta todas as aulas
    await prisma.classes.deleteMany({});

    console.log('All classes deleted successfully');
  } catch (error) {
    console.error('Error deleting classes:', error);
  } finally {
    await prisma.$disconnect(); // Fecha a conexão com o Prisma ao finalizar
  }
}

main()
  .catch((error) => {
    console.error('Error in seeder:', error);
    process.exit(1); // Termina o processo com código de erro
  })
  .finally(async () => {
    await prisma.$disconnect(); // Fecha a conexão com o Prisma ao finalizar
  });
