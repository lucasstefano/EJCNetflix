// seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



async function main() {
  try {
    // Criação de aulas de exemplo
    await prisma.classes.createMany({
      data: [
        { type: 'Ambos', title: 'Design Thinking', monitor: 'Vinny', imageUrl: '', ytLink: '0m5yi7oJZ1M', pdfLink: 'https://drive.google.com/file/d/1JaanbdUFJvrZeyL1Eixtit8PW-ILC86b/view', lock: 'bloqueado', data: '15/07/24' },
        { type: 'Design', title: 'UX Design I', monitor: 'Ellis', imageUrl: '', ytLink: 'ffb-AuG8P5E', pdfLink: 'https://drive.google.com/file/d/1v4tGRunHas4QhCCPyTqKTVUA_osjxzE2/view', lock: 'bloqueado', data: '15/07/24' },
        { type: 'Design', title: 'O Desenvolvimento na EJCM', monitor: 'Lucas Pinheiro', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '15/07/24' },
        { type: 'Design', title: 'UI Design I', monitor: 'Camila', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '16/07/24' },
        { type: 'Design', title: 'UX Design II', monitor: 'Anielly', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '16/07/24' },
        { type: 'Design', title: 'Figma I', monitor: 'Paula', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '17/07/24' },
        { type: 'Design', title: 'Imergir: Double Diamond e Pesquisa', monitor: 'Daniel X', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '18/07/24' },
        { type: 'Design', title: 'Definir: Persona e Proposta de Valor', monitor: 'Lorenzzo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '18/07/24' },
        { type: 'Design', title: 'Criar: User Flow e User Stories', monitor: 'Patricia', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '19/07/24' },
        { type: 'Ambos', title: 'Movimento Empresa Junior', monitor: 'Danielly Muniz', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '22/07/24' },
        { type: 'Ambos', title: 'Diversidade e Inclusão', monitor: 'Vinny & Ani', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '22/07/24' },
        { type: 'Design', title: 'UI Design II', monitor: 'Luciano', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '24/07/24' },
        { type: 'Design', title: 'Design Visual', monitor: 'Gustavo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '24/07/24' },
        { type: 'Design', title: 'Figma II', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '25/07/24' },
        { type: 'Design', title: 'Figma (Workshop)', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '25/07/24' },
        { type: 'Design', title: 'Figma III', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '26/07/24' },
        { type: 'Dev', title: 'Introdução a Computação', monitor: 'Vinny', imageUrl: '', ytLink: 'lKQ0lleMXtk', pdfLink: '', lock: 'bloqueado', data: '15/07/24' },
        { type: 'Dev', title: 'Noções de Figma', monitor: 'Gustavo', imageUrl: '', ytLink: 'A7c1wJZRxV0', pdfLink: '', lock: 'bloqueado', data: '16/07/24' },
        { type: 'Dev', title: 'Git e Ambiente Dev', monitor: 'Iago Cesar', imageUrl: '', ytLink: 'A7c1wJZRxV0', pdfLink: '', lock: 'bloqueado', data: '16/07/24' },
        { type: 'Dev', title: 'HTML/CSS I', monitor: 'Bruna Nobrega', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '16/07/24' },
        { type: 'Dev', title: 'HTML/CSS II', monitor: 'Leonardo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '17/07/24' },
        { type: 'Dev', title: 'Scrum', monitor: 'Miguel Ângelo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '18/07/24' },
        { type: 'Dev', title: 'Marketing e Vendas', monitor: 'Iago Cesar', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '17/07/24' },
        { type: 'Dev', title: 'Javascript I', monitor: 'Miguel Ângelo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '18/07/24' },
        { type: 'Dev', title: 'Javascript II - POO', monitor: 'Gustavo Breda', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '18/07/24' },
        { type: 'Dev', title: 'Typescript', monitor: 'Danilo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '19/07/24' },
        { type: 'Ambos', title: 'Wordpress I', monitor: 'Leonardo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '22/07/24' },
        { type: 'Ambos', title: 'WordPress II', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '23/07/24' },
        { type: 'Dev', title: 'Introdução ao React', monitor: 'Bruna Nobrega', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '23/07/24' },
        { type: 'Dev', title: 'React Native', monitor: 'Lucas Stefano', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '24/07/24' },
        { type: 'Dev', title: 'Styled Components', monitor: 'Franscisco', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '24/07/24' },
        { type: 'Dev', title: 'Modelagem BD', monitor: 'Socrates de Sousa', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '25/07/24' },
        { type: 'Dev', title: 'Introdução ao Backend e Models', monitor: 'Danilo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '25/07/24' },
        { type: 'Dev', title: 'Rotas, Controllers e Seeders', monitor: 'Gabriel Araújo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '25/07/24' },
        { type: 'Dev', title: 'Components & DataBinding', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '26/07/24' },
        { type: 'Dev', title: 'Middlewares & Validation', monitor: 'Gabriel Araújo', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '29/07/24' },
        { type: 'Dev', title: 'Formulários, Máscaras e Validação', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '29/07/24' },
        { type: 'Dev', title: 'Autenticação', monitor: 'Lucas Al Alam', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '30/07/24' },
        { type: 'Dev', title: 'Rotas', monitor: 'Gustavo Breda', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '30/07/24' },
        { type: 'Dev', title: 'Nodemailer & Multer', monitor: 'Socrates de Souza', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '31/07/24' },
        { type: 'Dev', title: 'Hooks', monitor: 'Lucas Stefano', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '31/07/24' },
        { type: 'Dev', title: 'Ferramentas Nativas', monitor: 'Instrutor', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '31/07/24' },
        { type: 'Dev', title: 'Integração I', monitor: 'Gabriel Ayres', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '31/07/24' },
        { type: 'Dev', title: 'Integração II', monitor: 'Gabriel Ayres', imageUrl: '', ytLink: '', pdfLink: '', lock: 'bloqueado', data: '31/07/24' },

      ]

    });

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('Failed to insert seed data:', error);
  process.exit(1);
});
