/*
JS Para la comprobación de datos del Fromulario de entrada
*/

// Inicialización de variables y objetos
const nickInput = document.getElementById('nick');
const tamanoInput = document.getElementById('tamano');
const formEntrada = document.getElementById('formEntrada');
const error = document.getElementById('error');

if (sessionStorage.getItem('error')) {
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}


// Eventos
formEntrada.addEventListener('submit', (event) => {
    if (nickInput.value.length === 0) {
        console.log('No hay nick');
        nickInput.focus();
        event.preventDefault();
        error.innerText = 'El campo nick no puede estar vacío';
    } else if (tamanoInput.value === '0') {
        console.log('No se ha seleccionado tamaño');
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = 'Se debe seleccionar un tamaño de panel';
    }
    // Información es correcta
    datosUsuario(nickInput);
})