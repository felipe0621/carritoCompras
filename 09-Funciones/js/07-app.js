// COMO SE Comunican las funciones video 64
//siempre debe haber una funcion que arranque todo el sistema en este caso iniciarApp



iniciarApp();  //en este caso funciona porque estamos abajo colocando la palabra function
//segundaFuncion(); //la puedo llamar aca

function iniciarApp(){
    console.log('Iniciando app......');

    segundaFuncion();  //la puedo llamar aca
}

//segundaFuncion(); //la puedo llamar aca
function segundaFuncion(){
    console.log('Desde la segunda función');

    usuarioAutenticado('Pipe');
}

//segundaFuncion(); //la puedo llamar aca 

function usuarioAutenticado(usuario){
    console.log('Autenticado usaurio... Espere...');
    console.log(`El usuario autenticado exitosamente corresponde a: ${usuario}`);
}