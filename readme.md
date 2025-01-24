# Juego del Amigo Secreto

Este es un proyecto simple desarrollado en JavaScript, HTML y CSS que permite organizar un juego del amigo secreto. Los usuarios pueden agregar nombres a una lista, y al final, sortear un amigo secreto de manera aleatoria.

## Características

- Agregar nombres a una lista dinámica.
- Visualizar los nombres agregados.
- Sortear un amigo secreto al azar entre los nombres ingresados.

## Cómo usar el proyecto

1. **Agregar nombres:**
   - Escribe el nombre en el cuadro de texto y haz clic en el botón "Agregar".
   - Los nombres aparecerán en una lista debajo del campo de entrada.

2. **Sortear un amigo secreto:**
   - Haz clic en el botón "Sortear".
   - El resultado del sorteo se mostrará debajo de la lista.

## Estructura del código

### Funciones principales

1. **`agregarAmigo`**
   - Toma el nombre ingresado en el campo de texto.
   - Verifica que el campo no esté vacío.
   - Agrega el nombre a la lista de amigos y actualiza la visualización.

2. **`mostrarAmigos`**
   - Genera una lista de nombres en formato `<li>` para mostrar en pantalla.
   - Utiliza un bucle `for` para recorrer los nombres almacenados.

3. **`limpiarCajaTexto`**
   - Limpia el contenido del campo de texto después de agregar un nombre.

4. **`sortearAmigo`**
   - Genera un índice aleatorio para seleccionar un amigo secreto.
   - Muestra el nombre sorteado en pantalla.

5. **`asignarTextoElemento`**
   - Asigna texto a un elemento HTML específico utilizando `textContent`.