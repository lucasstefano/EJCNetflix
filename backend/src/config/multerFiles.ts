import express from 'express';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Diretório onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `img-aula-${uniqueSuffix}${ext}`); // Nome do arquivo salvo
  },
});

export const uploadPhoto = multer({ storage: storage });
