const nameInput = document.getElementById('name');
const edadInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const errorText = document.getElementById('error');

form.addEventListener('submit', event => {
    if (nameInput.value.length === 0) {
        errorText.textContent = "El nombre no puede estar vacío";
        errorText.style.display = "block";
        event.preventDefault();
    } else if (edadInput.value > 150 || edadInput.value < 0 || edadInput.value === "") {
        errorText.textContent = "La edad no es válida";
        errorText.style.display = "block";
        event.preventDefault();
    } else if (emailInput.value.length === 0) {
        errorText.textContent = "El email no puede estar vacío";
        errorText.style.display = "block";
        event.preventDefault();
    }
});