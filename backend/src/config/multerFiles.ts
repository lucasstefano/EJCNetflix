/*import express from 'express';
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
*/

import multer from "multer";
import path from "path";

//Aqui a função para armazenar imagens. Caso queira armazenar outros arquivos em pastas diferentes, pode fazer uma função tipo essa e mudar o caminho no destination
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

//Aqui para fazer upload de fotos. Mesma coisa da outra função: pode fazer uma nova, mudar alguns parâmetros e armazenar outras coisas, como arquivo pdf, vídeo, etc
const uploadPhoto = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Apenas arquivos .jpg, .jpeg e .png são suportados"));
    }
    cb(null, true);
  },
  limits: {
      //100MB e ate 1 arquivos
      fileSize: 100 * 1024 * 1024,
      files: 1
  },

});

export default uploadPhoto;

