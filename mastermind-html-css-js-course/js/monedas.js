const eurosInput = document.getElementById('euros');
const dolarInput = document.getElementById('dolar');
const libraInput = document.getElementById('libra');
const yenInput = document.getElementById('yen');
const boton = document.getElementById('boton');

boton.addEventListener('click', (event) => {
    let euros, yenes, libras, dolares;
    euros = parseInt(eurosInput.value);
    if (eurosInput.value.length === 0 || isNaN(parseInt(eurosInput.value))) eurosInput.value = '0';
    euros = parseInt(eurosInput.value);
    yenes = 143.55*euros;
    libras = 0.88*euros;
    dolares = 1.06*euros;

    dolarInput.value = dolares;
    yenInput.value = yenes;
    libraInput.value = libras;
})