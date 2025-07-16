import { emitirTexto } from "./socket-front-documentos.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", (texto) => {
    emitirTexto(textoEditor.value);
})

function atualizaTexto(texto) {
    textoEditor.value = texto;
}

export { atualizaTexto };