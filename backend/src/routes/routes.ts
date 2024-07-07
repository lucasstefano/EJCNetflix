import express from 'express';
import { addPictureClass, createTTClass, findClassById, findClassesByType, getAllClasses, updateTTClass } from '../controllers/ClassesController';
import { Router } from "express";
import uploadPhoto from '../config/multerFiles';

const router = Router();

// Rota para criar uma nova aula
router.get('/getAllClasses', getAllClasses);

// Rota para encontra aula por area
router.get('/findClassesByType/:type', findClassesByType)

// Rota para encontra aula por id
router.get('/findClassesById/:id',findClassById)

// Rota para fazer mudança na aula
router.put('/updateClass/:id', updateTTClass)

router.post('/createClass', createTTClass)
router.post('/uploadPhoto/:id', uploadPhoto.single("imageUrl"), addPictureClass)


export default router;