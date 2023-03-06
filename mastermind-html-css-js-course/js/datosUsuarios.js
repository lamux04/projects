// JS para la gestíon de datos de usuario

let nick;

function datosUsuario (nick) {
    sessionStorage.setItem('nick', nick.value);
}

function mostrarDatosUsuario () {
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function comprobacionDatosUsuario () {
    let answer;
    if (nick === null){
        answer = false;
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario');
    } 
    else answer = true;
    return answer;
}