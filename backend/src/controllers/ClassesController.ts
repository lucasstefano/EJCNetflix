import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new class
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

// Delete an existing class
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

// Find classes by type
export const findClassesByType = async (req: Request, res: Response) => {
  const type = req.params.type; // Captura o tipo a partir dos parâmetros da requisição

  try {
    const classes = await prisma.classes.findMany({
      where: {
        type: type,
      },
    });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: `Error fetching ${type} classes` });
  }
}

// Find classes by id
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


// Find All Classes
export const getAllClasses = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.classes.findMany();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching classes' });
  }
}

// Update an existing class
export const updateTTClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, title, monitor, ytLink, pdfLink, lock, data } = req.body;
  
  try {
    const updateData: any = {
      type,
      title,
      monitor,
      ytLink,
      pdfLink,
      lock,
      data,
    };

    if (req.file) {
      updateData.imageUrl = req.file.path; // Caminho da imagem no servidor
    }

    const updatedClass = await prisma.classes.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    res.json(updatedClass);
    console.log(updatedClass);
  } catch (error) {
    console.error('Erro ao atualizar aula:', error);
    res.status(500).json({ error: 'Erro ao atualizar aula' });
  }
};