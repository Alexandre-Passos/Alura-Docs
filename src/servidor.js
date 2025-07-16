import express from "express";
const app = express();
const PORT = process.env.port || 3000;

import url from "url";
import path from "path";
import { createServer } from 'node:http';
import { Server } from "socket.io";


const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));


const servidorHttp = createServer(app);

servidorHttp.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

const io = new Server(servidorHttp);

io.on("connection", () => {
    console.log("Um cliente se conectou.");
})