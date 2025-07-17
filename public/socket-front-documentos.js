import { atualizaTexto } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome);
}


function emitirTexto(textoEditor) {
    socket.emit("texto_editor", textoEditor);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTexto(texto);
});

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});

export { selecionarDocumento, emitirTexto };