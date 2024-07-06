import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Criar Aula
export const createTTClass = async (req: Request, res: Response) => {
  const { type, title, monitor, ytLink, pdfLink, lock, data } = req.body;
  try {
    const newTTClass = await prisma.classes.create({
      data: {
        type,
        title,
        monitor,
        ytLink,
        pdfLink,
        lock,
        data,
      },
    });
    res.status(201).json(newTTClass);
    console.log(newTTClass)
  } catch (error) {
    res.status(500).json({ error: 'Unable to create class' });
  }
};

// Deletar uma Aula
export const deleteClass = async (req: Request, res: Response) => {
  const classId = parseInt(req.params.id);
  try {
    await prisma.classes.delete({
      where: { id: classId },
    });
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting class' });
  }
}

// Encontrar Aula por Área (Dev, ou Design)
export const findClassesByType = async (req: Request, res: Response) => {
  const { type } = req.params; // Captura o tipo a partir dos parâmetros da requisição

  if (!type) {
    return res.status(400).json({ error: 'Type parameter is required' });
  }

  try {
    const classes = await prisma.classes.findMany({
      where: {
        OR: [
          { type: type },
          { type: 'Ambos' },
        ],
      },
    });

    if (classes.length === 0) {
      return res.status(404).json({ message: `No classes found for type ${type}` });
    }

    res.status(200).json(classes);
  } catch (error) {
    console.error(`Error fetching ${type} classes:`, error);
    res.status(500).json({ error: `Error fetching ${type} classes` });
  }
};
// Encontra Area por Id
export const findClassById = async (req: Request, res: Response) => {
  const classId = parseInt(req.params.id); // Captura o ID a partir dos parâmetros da requisição

  try {
    const ttClass = await prisma.classes.findUnique({
      where: {
        id: classId,
      },
    });

    if (!ttClass) {
      res.status(404).json({ error: 'Class not found' });
    } else {
      res.status(200).json(ttClass);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching class' });
  }
};


// Encontrar todas Aulas
export const getAllClasses = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.classes.findMany();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching classes' });
  }
}

// Atualizar Aula
export const updateTTClass = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { type, title, monitor, ytLink, pdfLink, lock, data } = req.body;
  let imageUrl = '';
  if (req.file) {
    imageUrl = req.file.path; // Caminho da imagem salva pelo Multer
  }

  try {
    const updatedClass = await prisma.classes.update({
      where: { id: parseInt(id) },
      data: {
        type,
        title,
        monitor,
        ytLink,
        pdfLink,
        lock,
        data,
        imageUrl,
      },
    });
    console.log(updatedClass)
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a classe' });
  }
};