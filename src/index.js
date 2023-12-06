import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './db/config.js';
import userRouter from './routes/v1/user.routes.js';
const server = express();

// Variables de entorno
dotenv.config();

// Midllewares
server.use(cors());
server.use(express.json({ limit: '5mb' }));
server.use(express.urlencoded({ extended: false }));

// Inicializar base de datos
dbConnect();

const PORT = process.env.PORT || 3000;

// Rutas
server.use('/api/v1/users', userRouter);

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
