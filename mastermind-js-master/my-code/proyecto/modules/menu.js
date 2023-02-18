// Introducimos modulos de npm
const prompt = require('prompt-sync')();
const showModule = require('./show');
const addModule = require('./add');
const removeModule = require('./remove');
const markModule = require('./mark');

const menu = () => {

    console.clear();
    console.log("Funcionalidades disponibles: ");
    console.log("(1) Añadir una tarea a la lista");
    console.log("(2) Eliminar una tarea de la lista");
    console.log("(3) Mostrar la lista");
    console.log("(4) Marcar una tarea como completada");

    // Elegimos la función dependiendo de la entrada del usuario
    switch (prompt('Elige lo que quieres hacer: ')) {
        case '1':
            addModule.add(); break;
        case '2':
            removeModule.remove(); break;
        case '3': 
            showModule.show(); break;
        case '4':
            markModule.marcar(); break;
        default:
    }
    
}

exports.menu = menu;