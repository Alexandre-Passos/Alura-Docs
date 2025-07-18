import { emitirTexto, selecionarDocumento } from "./socket-front-documentos.js";


const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");


const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";
selecionarDocumento(nomeDocumento);



tituloDocumento.innerText = nomeDocumento;

textoEditor.addEventListener("keyup", (texto) => {
    emitirTexto({ texto: textoEditor.value, nomeDocumento });
})

function atualizaTexto(texto) {
    textoEditor.value = texto;
}

export { atualizaTexto };