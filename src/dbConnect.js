import 'dotenv/config';
import { MongoClient } from "mongodb";

const cliente = new MongoClient(process.env.SENHA_MONGODB);


let documentosColecao;

try {
    await cliente.connect();
    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("conectado com sucesso com o banco de dados")
} catch (error) {
    console.log(error);
}

export { documentosColecao };