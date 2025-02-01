let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}