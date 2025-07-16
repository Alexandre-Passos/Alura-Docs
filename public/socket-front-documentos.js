import { atualizaTexto } from "./documento.js";

const socket = io();
function emitirTexto(textoEditor) {
    socket.emit("texto_editor", textoEditor);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTexto(texto);
});

export { emitirTexto };