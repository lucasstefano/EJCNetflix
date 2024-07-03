import express from 'express';
import multer from 'multer';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Define o diretório onde os arquivos serão armazenados
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname); // Define o nome do arquivo
  }
});

export const uploadPhoto = multer({ storage: storage });


