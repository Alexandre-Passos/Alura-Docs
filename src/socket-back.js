import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log(`Um cliente com id ${socket.id} se conectou.`);
    socket.on("texto_editor", (texto) => {
        console.log(texto);
    })
})