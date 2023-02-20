const fs = require('fs');
const prompt = require('prompt-sync')();


const convertir = (datos) => {
    let i = 1;
    while (datos.includes('-') || datos.includes('*')) {
        if ((datos.indexOf('-') < datos.indexOf('*') && datos.indexOf('-') !== -1) || datos.indexOf('*') === -1) datos = datos.replace('-', `(${i}) `);
        else datos = datos.replace('*', `(${i}) `);
        i++;
    }
    
    return datos;
}

const eliminar = (file, data, n) => {
    let indiceInicial = 0, vec, i;
    
    // Buscamos la cadena a marcar
    for (i = 0; i < n - 1; i++) 
        indiceInicial = data.indexOf('\n', indiceInicial) + 1;

    vec = data.split('');
    if (vec[indiceInicial] === '-') vec[indiceInicial] = '*';
    else vec[indiceInicial] = '-';
    data = vec.join('');

    // Modificamos el fichero
    fs.writeFileSync(file, data);
}

const marcar = () => {
    let task, data;
    console.clear();

    try {
        data = fs.readFileSync('list.txt', 'utf8');
        if (data === '') console.log('No hay ninguna tarea');
        else {
            // Poner números delante de cada tarea
            console.log(convertir(data));

            // Preguntamos cual quiere eliminar 
            task = prompt('¿Qué tarea quieres marcar?: ');

            // Eliminamos la linea task de list.txt
            eliminar('list.txt', data, task);
        }
    } catch (err) {
        console.log('No hay ninguna tarea');
    }

}

exports.marcar = marcar;