// Importación de modulos
const menuModule = require('./modules/menu');
const prompt = require('prompt-sync')();

// Variables y constantes globales
let repeat = true;
let answer;

console.log('TASK LIST PROGRAMM');

console.clear();

// Ejecuta el menu y pregunta si quiere volver a empezar
do {
    menuModule.menu();
    answer = prompt('¿Quieres volver a ejecutar el menu? (S/N): ');
    if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'not' || answer.toLowerCase() === 'no')
        repeat = false;
} while (repeat);


console.log('Programa terminado');