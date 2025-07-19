import { documentosColecao } from "./dbConnect.js";
function encontrarDocumento(nomeDocumento) {
    const documento = documentosColecao.findOne({ nome: nomeDocumento });
    return documento;
}

function atualizaDocumento(nomeDocumento, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome: nomeDocumento,
    }, {
        $set:
        {
            texto
        }
    },
    )
    return atualizacao
}

export { encontrarDocumento, atualizaDocumento };