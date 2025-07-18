import { documentosColecao } from "./dbConnect.js";
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
        console.log(documento);
        if (documento) {
            devolver_texto(documento.texto);
        }
    })

    socket.on("texto_editor", ({ texto, nomeDocumento }) => {
        const documento = encontrarDocumento(nomeDocumento);

        if (documento) {
            documento.texto = texto;
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto)
        }
    })
})

function encontrarDocumento(nomeDocumento) {
    const documento = documentosColecao.findOne({ nome: nomeDocumento });
    return documento;
}