let amigos = '';
let nombres = [];
let listaNombresSorteados = [];
let intentos = -1;

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

// Muestra el nombre de cada amigo agregado en el HTML
function mostrarAmigos(){
    let listaContenedoraAmigos = document.getElementById('listaAmigos');
    let contenido = '';
    // Iterando cada indice de nombres para luego guardar en la variable contendio
    for (let index = 0; index < nombres.length; index++) {
        contenido += `<li>${nombres[index]}</li>`
    }
    // Mostrando en el HTML todos los nombres por indice obtenidos
    listaContenedoraAmigos.innerHTML = contenido;
}

function limpiarCajaTexto() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    // Haciendo sorteo de los amigos
    let amigoSorteado = Math.floor(Math.random() * nombres.length);
    intentos ++;
    console.log(nombres)
    console.log(nombres.length)
    console.log(intentos)
    // Muestra en pantalla el sorteo realizado
    asignarTextoElemento('#resultado', nombres[amigoSorteado]);
    // Condicional para que todos los nombres puedan salir
    // Los intentos aumentan desde que se sortea la primera vez, cuando este sea igual a
    if(intentos == nombres.length){
        asignarTextoElemento('#resultado', 'Todos los nombres ya fueron sorteados.')
    } else {
        if (listaNombresSorteados.includes(amigoSorteado)){
            sortearAmigo();
        } else {
            listaNombresSorteados.push(amigoSorteado)
            asignarTextoElemento('#resultado', `El amigo sorteado fue: ${nombres[amigoSorteado]}`);
        }
    }
}

function asignarTextoElemento(etiqueta, texto){
    document.querySelector(etiqueta).textContent = texto;
}
