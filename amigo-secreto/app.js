// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de variable array para almacenar nombres de amigos ingresados

let amigos = [];

//Función para agregar un amigo al array

function agregarAmigo() {

    // Capturar el valor del campo de entrada
    let input = document.getElementById('amigo');

    //Elimina espacios bacios al inicio y al final del texto
    let nombre = input ? input.value.trim() : '';

    // Validar la entrada, asegurando que no esté vacía
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = '';
    mostrarAmigos();

     // Habilitar el botón de nuevo sorteo si hay al menos un amigo
    document.querySelector('#reiniciar').removeAttribute('disabled');

}
    // Mostrar la lista actualizada de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');

    let html = '';

    // Recorrer el array amigos y agregar cada nombre como <li>
    amigos.forEach(function(nombre) {
        html += `<li>${nombre}</li>`;
    });
     // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML= html;
}
// Función para sortear un amigo al azar
function sortearAmigo() {
        // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    // Seleccionar un índice aleatorio y mostrar el nombre sorteado
    let indice = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre del amigo sorteado
    let nombreSorteado = amigos[indice];
    // Mostrar el resultado en la sección de resultados
    let resultado = document.getElementById('resultado');
    // Limpiar el contenido previo
    resultado.innerHTML = `<li>El amigo secreto es: ${nombreSorteado}</li>`;
}
// Función para reiniciar el sorteo
function nuevoSorteo() {
    // Limpiar el array de amigos y la lista en pantalla
    amigos = [];
    // Limpiar la lista de amigos y el resultado
    document.getElementById('listaAmigos').innerHTML = "";
    // Limpiar el campo de entrada y el resultado
    document.getElementById('resultado').innerHTML = "";
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = "";
    //desabilitar el botón de nuevo sorteo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}