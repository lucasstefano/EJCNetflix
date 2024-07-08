import express from 'express';
import { addPictureClass, createClass, deleteClass, DeleteImage, findClassById, findClassesByType, getAllClasses, updateTTClass } from '../controllers/ClassesController';
import { Router } from "express";
import uploadPhoto from '../config/multerFiles';


const router = Router();

// Rota para encontrar todas aulas
router.post('/CreateClass', createClass);

// Rota para encontrar todas aulas
router.delete('/DeleteClass/:id', deleteClass);

// Rota para encontrar todas aulas
router.get('/getAllClasses', getAllClasses);

// Rota para encontra aula por area
router.get('/findClassesByType/:type', findClassesByType)

// Rota para encontra aula por id
router.get('/findClassesById/:id', findClassById)

// Rota para fazer mudança na aula
router.put('/updateClass/:id', uploadPhoto.single("imagemUrl"), updateTTClass)

// Rota para colocar uma Image
router.put('/updateImage/:id', uploadPhoto.single("imagemUrl"), addPictureClass)

// Rota para deletar uma Imagem
router.put('/deleteImage/:id', DeleteImage)




export default router;
