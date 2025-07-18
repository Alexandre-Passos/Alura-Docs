import { atualizaTexto } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTexto(texto);
    });
}

function emitirTexto(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTexto(texto);
});


socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado! Motivo: ${motivo}`);
});

export { selecionarDocumento, emitirTexto };