import io from "./servidor.js";


const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript..."
    },
    {
        nome: "Node",
        texto: "texto de node..."
    },
    {
        nome: "Socket.io",
        texto: "texto de Socket.io..."
    }
];

io.on("connection", (socket) => {
    console.log(`Um cliente com id ${socket.id} se conectou.`);

    /* socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
Motivo: ${motivo}`);
    });*/

    socket.on("selecionar_documento", (nomeDocumento, devolver_texto) => {
        socket.join(nomeDocumento);

        const documento = encontrarDocumento(nomeDocumento);

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
    const documento = documentos.find((doc) => doc.nome === nomeDocumento);
    return documento;
}