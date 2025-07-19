import { atualizaDocumento, encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log(`Um cliente com id ${socket.id} se conectou.`);

    /* socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
Motivo: ${motivo}`);
    });*/

    socket.on("selecionar_documento", async (nomeDocumento, devolver_texto) => {
        socket.join(nomeDocumento);

        const documento = await encontrarDocumento(nomeDocumento);
      
        if (documento) {
            devolver_texto(documento.texto);
        }
    })

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
    });
});
