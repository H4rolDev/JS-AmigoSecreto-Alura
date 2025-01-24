let amigos = '';
let nombres = [];
let nuevaEtiquetaLI = '';
let elementoHTML = '';

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
    
    // nuevaEtiquetaLI = document.createElement('li');
    // // Agregar el nombre a la nueva etiqueta de lista
    // nuevaEtiquetaLI.textContent = amigos;
    // // Agregar la nueva etiqueta de lista al elemento HTML
    // elementoHTML.appendChild(nuevaEtiquetaLI);
}

function limpiarCajaTexto() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random() * nombres.length);
    asignarTextoElemento('#resultado', nombres[amigoSorteado]);
}

function asignarTextoElemento(etiqueta, texto){
    // Etiqueta es la etiqueta HTML a la que se le asignará el texto 
    // y texto es el texto que se le asignará a la etiqueta
    // textContent es una propiedad que permite asignar texto a una etiqueta HTML
    document.querySelector(etiqueta).textContent = texto;
}
