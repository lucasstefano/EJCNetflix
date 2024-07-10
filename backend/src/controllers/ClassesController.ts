import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Criar Aula
export const createClass = async (req: Request, res: Response) => {
  const { type, title, monitor, imageUrl, ytLink, pdfLink, lock, data } = req.body;
  try {
    const newClass = await prisma.classes.create({
      data: {
        type,
        title,
        monitor,
        imageUrl,
        ytLink,
        pdfLink,
        lock,
        data,
      },
    });
    res.json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a class' });
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
  const classId = parseInt(req.params.id); 

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

export const updateTTClass = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { type, title, monitor, ytLink, pdfLink, lock, data } = req.body;

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
      },
    });
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Error updating a classe' });
  }
};
// Atualizar Aula
export const DeleteImage = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedClass = await prisma.classes.update({
      where: { id: parseInt(id) },
      data: {
        imageUrl: '',
      },
    });
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting a Image' });
  }
};

export const addPictureClass = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Não foi feito o upload de nenhuma foto" });
    }
    const path = '/uploads/' + req.file.filename;
    const pictureInput: Prisma.ClassesUpdateInput = {
      imageUrl: path,
    }
    const updatedClass = await prisma.classes.update({
      where: { id: parseInt(id) },
      data: pictureInput,
    });
    return res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar a imagem' });
  }
}