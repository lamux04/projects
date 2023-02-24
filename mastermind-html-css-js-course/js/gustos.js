/*
JS Para la comprobación de datos del Fromulario de entrada
*/

// Inicialización de variables y objetos
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const videojuegoInput = document.getElementById('game');
const edadInput = document.getElementById('edad');
const plataformaInput = document.getElementById('platform');
const formEntrada = document.getElementById('formEntrada');
const error = document.getElementById('error');

// Eventos
formEntrada.addEventListener('submit', (event) => {
    if (nameInput.value.length === 0) {
        error.style.display = 'block';
        error.innerText = 'El campo nombre no debe estar vacío';
        nameInput.focus();
        event.preventDefault();
    } else if (emailInput.value.length === 0) {
        error.style.display = 'block';
        error.innerText = 'El campo email no debe estar vacío';
        emailInput.focus();
        event.preventDefault();
    } else if (!emailInput.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        error.style.display = 'block';
        error.innerText = 'El campo email no es correcto';
        emailInput.focus();
        event.preventDefault();
    } else if (videojuegoInput.value.length === 0) {
        error.style.display = 'block';
        error.innerText = 'El campo de videojuego favorito no debe estar vacío';
        videojuegoInput.focus();
        event.preventDefault();
    } else if (edadInput.value <= 0 || edadInput.value > 200) {
        error.style.display = 'block';
        error.innerText = 'No has introducido una edad válida';
        edadInput.focus();
        event.preventDefault();
    } else if (plataformaInput.value === '0') {
        error.style.display = 'block';
        error.innerText = 'Debes indicar una plataforma';
        plataformaInput.focus();
        event.preventDefault();
    }
})