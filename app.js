let amigos = '';
let nombres = [];

function agregarAmigo(){
    amigos = document.getElementById('amigo').value;
    if(amigos === ''){
        alert('Debe ingresar un nombre');
    } else {
        // Agregar el nombre a la lista de amigos
        nombres.push(amigos);
        mostrarAmigos();
        // Limpiar la caja de texto
        limpiarCajaTexto();
    }
}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    let contenido = '';
    for (let index = 0; index < nombres.length; index++) {
        // document.getElementById('listaAmigos').innerHTML = `<li>${nombres[index]}</li>`;
        contenido += `<li>${nombres[index]}</li>`
    }
    lista.innerHTML = contenido;
}

function limpiarCajaTexto() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random() * nombres.length);
    asignarTextoElemento('#resultado', nombres[amigoSorteado]);
}

function asignarTextoElemento(etiqueta, texto){
    document.querySelector(etiqueta).textContent = texto;
}
